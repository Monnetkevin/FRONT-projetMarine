import React, { useState } from "react";
import { Link } from "react-router-dom";

function Button({ linkTo, children, color, size }) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    padding: size === "large" ? "12px 24px" : "8px 16px",
    fontSize: size === "large" ? "1.25rem" : "1rem",
    backgroundColor: hovered
      ? color === "primary"
        ? "#f23d3d"
        : "#0d0d0d"
      : color === "primary"
      ? "#0d0d0d"
      : "#f23d3d",
    color: "white",
    border: "none",
    borderRadius: "1.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverExite = () => {
    setHovered(false);
  };

  return (
    <Link
      to={linkTo}
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExite}
    >
      {children}
    </Link>
  );
}

export default Button;
