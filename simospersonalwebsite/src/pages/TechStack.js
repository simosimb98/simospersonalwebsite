// src/pages/TechStack.js
import React from "react";
import Slider from "react-slick";
import { Element } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import './css/TechStack.css';

function TechStack() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Element name="tech-stack" className="section-hdr">
      <div className="tech-stack-header">
        <h1>Tech Stack</h1>
        <div className="line"></div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="slide-item">
              <div className="icon">{skill.icon}</div>
            </div>
          ))}
        </Slider>
      </div>
    </Element>
  );
}

export default TechStack;
