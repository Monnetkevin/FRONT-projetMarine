import React, { useEffect, useState } from "react";
import Header from "../../components/menu/Header";
import { useAuth } from "../../components/context/LoginContext";
import {
  faBook,
  faCalendar,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ButtonDashboard from "../../components/utils/ButtonDashboard";
import ProfilDashboard from "./ProfilDashboard";
import ProductAddForm from "../../components/product/ProductAddForm";
import CommentDashboard from "./CommentDashboard";

function Dashboard() {
  const [currentDashboard, setCurrentDashboard] = useState("profil");
  const { user, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="container-dashboard">
      <Header title="Gestion du compte" />

      <div className="dashboard">
        {user.role_id === 2 && (
          <div className="sidebar">
            <ul>
              <div className="sidebar__admin">
                <p>Panel Admin</p>
                <ButtonDashboard
                  icon={faComments}
                  setCurrentDashboard={setCurrentDashboard}
                  currentDashboard="ValideComments"
                >
                  Valider les commentaires
                </ButtonDashboard>
                <ButtonDashboard
                  icon={faBook}
                  setCurrentDashboard={setCurrentDashboard}
                  currentDashboard="livre"
                >
                  Ajouter un Livre
                </ButtonDashboard>
                <ButtonDashboard
                  icon={faCalendar}
                  setCurrentDashboard={setCurrentDashboard}
                  currentDashboard="evenement"
                >
                  Ajouter un Evenement
                </ButtonDashboard>
              </div>
            </ul>
          </div>
        )}
        <div className="content">
          {currentDashboard === "ValideComments" && <CommentDashboard />}
          {currentDashboard === "profil" && <ProfilDashboard />}
          {currentDashboard === "livre" && <ProductAddForm />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
