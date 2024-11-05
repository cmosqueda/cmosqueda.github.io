import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Flame } from "react-ionicons";

function Navbar() {
  return (
    <>
      <nav>
        {/* logo */}
        <div className="logo">
          <Link to={"/"} className="logolink">
            <p>T</p>
            <Flame color={"#5055ff"} height={"35px"} width={"35px"}></Flame>
            <p>N E</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
