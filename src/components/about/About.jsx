import React from "react";
import "./about.css";
import AboutImg from "../../assets/blue.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle"> My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            I am a front end developer blabla bla
          </p>
          <a href={CV} className="button">
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
