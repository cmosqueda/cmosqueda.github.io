import React from "react";
import "../styles/about.css";
import myCv from "../assets/MosquedaChristine_CVforApplication.pdf";
import { Document } from "react-ionicons";
import TechStacks from "../components/techstacks";

function About() {
  return (
    <>
      <section className="aboutsection">
        <div className="aboutdiv">
          <h1>ABOUT</h1>
          {/* div line bar */}

          <span className="ybar"></span>

          <div className="aboutdetails">
            <p>
              Currently a third-year Information Technology student with a focus on Database and Information Systems at
              USTP, I have always been passionate about technological innovations and how they can make a difference in
              our lives. I aim to learn, grow, and develop both in character and skills, to become well-rounded and
              improve holistically as I progress through my education.
            </p>
            <a href={myCv} className="pdflink" target="_blank">
              <Document color={"#efefef"}></Document>
              <p>View my CV</p>
            </a>
          </div>
        </div>

        {/* tech stack slider */}
        <div className="techstacks">
          <TechStacks></TechStacks>
        </div>
      </section>
    </>
  );
}

export default About;
