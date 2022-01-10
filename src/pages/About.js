import React from "react";
import MultipleBurgers from "../assets/multipleBurgerde.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleBurgers})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>my name is previouggfhg bhhgrgf
            jghuyrhf<br>ghhystwtghdhfjothhbvhgfghgggf</br>
        </p>
        
      </div>
    </div>
  );
}

export default About;