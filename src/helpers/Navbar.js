import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} />
            </div>
           <div className="rightSide">
               <link to="/"> Home </link>
               <link to="/menu"> Menu </link>
               <link to="/about"> About </link>
               <link to="/contact"> Contact </link>

         </div>
        </div>
    );
}

export default Navbar
