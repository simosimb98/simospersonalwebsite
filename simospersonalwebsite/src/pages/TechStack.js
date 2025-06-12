// src/pages/TechStack.js
import React from "react";
import Slider from "react-slick";
import { Element } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as FaIcons from 'react-icons/fa';
import './css/TechStack.css';

function TechStack() {
  const skills = [
    { icon: <FaIcons.FaHtml5 />, name: "HTML5" },
    { icon: <FaIcons.FaCss3Alt />, name: "CSS3" },
    { icon: <FaIcons.FaJs />, name: "JavaScript" },
    { icon: <FaIcons.FaReact />, name: "React" },
    { icon: <FaIcons.FaPhp />, name: "PHP" },
    { icon: <FaIcons.FaJava />, name: "Java" }, 
    { icon: <FaIcons.FaGitSquare />, name: "Git" },
    { icon: <FaIcons.FaDatabase />, name: "SQL" }, 
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
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
      <div className="tech-stack-container">
          <div className="tech-stack-description">
            <ul className="tech-stack-list">
              <li>Tech Enthusiast.</li>
              <li>Exploring new technologies.</li>
              <li>Keeping up with modern tech.</li>
              <li>Willing to learn & adapt.</li>
              <li>Team player.</li>
            </ul>
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
      </div>
    </Element>
  );
}

export default TechStack;
