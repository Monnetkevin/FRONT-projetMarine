import React, { useEffect, useState } from "react";
import Header from "../../components/menu/Header";
import auth from "../../components/auth/Token";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [currentDashboard, setCurrentDashboard] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.logged()) {
      navigate("/");
    }
  }, []);
  // console.log(currentDashboard);

  return (
    <div className="container-dashboard">
      <Header title="Gestion du compte" />
      <div className="dashboard">
        <div className="sidebar">
          <ul>
            <li>
              <button
                className="dashboard__button"
                onClick={() => {
                  setCurrentDashboard("profil");
                }}
              >
                <FontAwesomeIcon
                  className="sidebar__icon"
                  icon={faUser}
                  size="xl"
                  color="primary"
                />
                Profil
              </button>
            </li>
            <li>
              <button
                className="dashboard__button"
                onClick={() => {
                  setCurrentDashboard("livre");
                }}
              >
                <FontAwesomeIcon
                  className="sidebar__icon"
                  icon={faBook}
                  size="xl"
                  color="primary"
                />
                Livre
              </button>
            </li>
          </ul>
        </div>
        <div className="content">
          {/* {currentDashboard === "profil" && }  */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
