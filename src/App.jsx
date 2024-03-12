import React from "react";
import NavBar from "./components/menu/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import { AuthProvider } from "./components/context/LoginContext";
import { GlobalProvider } from "./components/context/GlobalContext";
import Shop from "./pages/Shop";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/evenement" element={""} />
            <Route path="/contact" element={""} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
