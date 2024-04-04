import React from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context/GlobalContext";
import auth from "../../components/auth/Token";
import axios from "axios";
import { API_ROUTE } from "../../utils/RouteApi";

function ProductAddForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { categories, products, setProducts, setIsLoaded } = useGlobalContext();

  const addBook = async (data) => {
    try {
      const request = { ...data, image_name: null };
      const res = await axios.post(API_ROUTE.PRODUCT, request, {
        headers: {
          Authorization: "Bearer" + auth.getToken(),
        },
      });

      if (res.data.status === "success") {
        const requestImg = {
          image_name: data.image_name[0],
          product_id: res.data.data.id,
        };

        await axios.post(API_ROUTE.IMGPRODUCT, requestImg, {
          headers: {
            Authorization: "Bearer" + auth.getToken(),
            "Content-Type": "multipart/form-data",
          },
        });

        // mise à jour du state du produit
        const updateProduct = products.map((product) =>
          product.id === res.data.data.id ? res.data.data : product
        );
        setProducts(updateProduct);
        setIsLoaded(false);
        reset();
      } else {
        console.log("toast");
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="container-productAddForm">
      <div className="productAdd">
        <div className="productAdd__title">
          <p>Ajouter un livre</p>
        </div>
        <form onSubmit={handleSubmit(addBook)}>
          <div>
            <label htmlFor="product_name">Titre :</label>
            <input
              {...register("product_name", {
                required: "Titre obligatoire",
                minLength: {
                  value: 3,
                  message: "Minimum de 3 caractères",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum de 50 caractères",
                },
              })}
              type="text"
            />
            {errors.product_name && (
              <div className="productAdd__error">
                <p>{errors.product_name.message}</p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="product_content">Description :</label>
            <textarea
              {...register("product_content", {
                required: "Description Obligatoire",
                minLength: {
                  value: 20,
                  message: "Minimum de 20 caractères",
                },
              })}
              name="product_content"
              cols="80"
              rows="15"
            />
            {errors.product_content && (
              <div className="productAdd__error">
                <p>{errors.product_content.message}</p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="price">Prix : </label>
            <input
              {...register("price", {
                required: "Prix obligatoire",
                min: {
                  value: 1,
                  message: "Erreur de prix, il doit être suppérieure à 1",
                },
                max: {
                  value: 100,
                  message: "Erreur de prix, il doit être inférieure à 100",
                },
              })}
              type="number"
            />
            {errors.price && (
              <div className="productAdd__error">
                <p>{errors.price.message}</p>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="quantity">Quantité : </label>
            <input
              {...register("quantity", { required: "Quantité obligatoire" })}
              type="number"
            />
            {errors.quantity && (
              <div className="productAdd__error">
                <p>{errors.quantity.message}</p>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="category">Catégorie :</label>
            <select
              {...register("category_id")}
              name="category"
              defaultValue=""
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="image_name"> Image :</label>
            <input
              {...register("image_name", { required: "Image obligatoire" })}
              type="file"
              accept="image/*"
            />
            {errors.image_name && (
              <div className="productAdd__error">
                <p>{errors.image_name.message}</p>
              </div>
            )}
          </div>
          <button className="productAdd__btn" type="submit">
            Créer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAddForm;
