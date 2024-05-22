import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Vérifier le composant JSON", () => {
  describe("Affiche les catégories depuis l'API", () => {
    it("Selectionne les options", () => {
      // render(<ProductAddForm />);
      // userEvent.selectOptions(screen.getByTestId("selectCategory"), [""]);
      // expect(screen.getByTestId("1").selected).toBe(true);
    });
  });
});

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Home from "../../pages/Home";

// describe("HomePage", () => {
//   test("affiche les derniers produits et les derniers commentaires", () => {
//     render(<Home />);

//     // Vérifie que la liste des produits populaires est affichée
//     const popularProductsSection = screen.getByTestId("popular-products");
//     expect(popularProductsSection).toBeInTheDocument();

//     // Vérifie qu'au moins un produit est visible dans la liste des produits populaires
//     const popularProduct = screen.getByTestId("popular-product");
//     expect(popularProduct).toBeInTheDocument();

//     // Vérifie que le bouton ou le lien de la promotion est cliquable
//     const promotionButton = screen.getByTestId("promotion-button");
//     expect(promotionButton).toBeInTheDocument();
//     expect(promotionButton).toBeEnabled();
//   });
// });
