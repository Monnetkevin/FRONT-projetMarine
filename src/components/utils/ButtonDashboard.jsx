import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonDashboard({
  children,
  icon,
  setCurrentDashboard,
  currentDashboard,
}) {
  return (
    <li>
      <button
        className="dashboard__button"
        onClick={() => {
          setCurrentDashboard(currentDashboard);
        }}
      >
        <FontAwesomeIcon
          className="sidebar__icon"
          icon={icon}
          size="xl"
          color="primary"
        />
        {children}
      </button>
    </li>
  );
}

export default ButtonDashboard;
