import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "../styles/buttonlink.css";

interface ButtonLinkProps {
  label: string; // Text to display for the button link
  to: string; // URL to link to
  children: ReactNode; // Any nested elements to render inside the link
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ label, to, children }) => {
  return (
    <button className="buttonlink">
      <Link to={to} className="buttonlinktext">
        {children}
        <p>{label}</p>
      </Link>
    </button>
  );
};

export default ButtonLink;
