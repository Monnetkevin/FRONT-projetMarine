import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./App";
import { AuthProvider } from "./components/context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
