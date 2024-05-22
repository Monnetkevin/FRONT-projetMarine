import React from "react";
import NavBar from "./components/menu/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import { GlobalProvider } from "./components/context/GlobalContext";
import Shop from "./pages/shop/Shop";
import Footer from "./components/menu/Footer";
import ProductDetails from "./pages/shop/ProductDetails";
import Dashboard from "./pages/admin/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./components/context/CartContext";
import WebhookSuccess from "./pages/stripe/webhook/WebhookSuccess";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            limit={3}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/evenement" element={""} />
            <Route path="/contact" element={""} />
            <Route path="/boutique/:id" element={<ProductDetails />} />
            <Route path="/profil" element={<Dashboard />} />
            <Route path="/endpoint/succes" element={<WebhookSuccess />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
