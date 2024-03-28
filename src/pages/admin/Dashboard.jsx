import React, { useEffect, useState } from "react";
import Header from "../../components/menu/Header";
import { useAuth } from "../../components/context/LoginContext";
import {
  faBook,
  faCalendar,
  faCartShopping,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ButtonDashboard from "../../components/utils/ButtonDashboard";
import ProfilDashboard from "./ProfilDashboard";
import ProductAddForm from "../../components/product/ProductAddForm";

function Dashboard() {
  const [currentDashboard, setCurrentDashboard] = useState("profil");
  const { user } = useAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  console.log(user);

  return (
    <div className="container-dashboard">
      <Header title="Gestion du compte" />
      <div className="dashboard">
        <div className="sidebar">
          <ul>
            <ButtonDashboard
              icon={faUser}
              setCurrentDashboard={setCurrentDashboard}
              currentDashboard="profil"
            >
              Votre Profil
            </ButtonDashboard>

            <ButtonDashboard
              icon={faCartShopping}
              setCurrentDashboard={setCurrentDashboard}
              currentDashboard="commande"
            >
              Vos Commandes
            </ButtonDashboard>
            <ButtonDashboard
              icon={faComments}
              setCurrentDashboard={setCurrentDashboard}
              currentDashboard="commentaire"
            >
              Vos Commentaires
            </ButtonDashboard>

            {user.role_id === 2 && (
              <div className="sidebar__admin">
                <p>Panel Admin</p>
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
            )}
          </ul>
        </div>
        <div className="content">
          {currentDashboard === "profil" && <ProfilDashboard />}
          {currentDashboard === "livre" && <ProductAddForm />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
