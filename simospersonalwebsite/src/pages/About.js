import { Element, Events, scrollSpy } from "react-scroll";
import * as FaIcons from 'react-icons/fa';
import './css/About.css';

function About() {
    return(
        <Element name="about" className="section">
            <div className="about-me-header">
                <h1>About me</h1>
                <div className="line"></div>
            </div>
            <div className="about-me-items">
                <div className="profile-picture-about">
                    <img src="/images/simos_lb.jpg" alt="Simos Imbraem"/>
                </div>
                <div className="about-me-text">
                    <div className="about-me-text-header">
                        <h2>Web developer</h2><br/>
                    </div>
                    <br/>
                    <div className="about-me-text-description">
                        <p>
                            A passionate full-stack developer with a sharp eye for both front-end aesthetics and back-end efficiency. Skilled in building responsive, user-friendly interfaces and robust server-side systems. Thrives in dynamic environments, turning complex ideas into seamless digital experiences. Continuously learning and evolving with the latest technologies. Driven by curiosity, creativity, and clean code.
                        </p>
                    </div>
                    <br></br>
                      <div className="about-me-icons">
                        <span><FaIcons.FaUserClock />26 years old</span>
                        <span><FaIcons.FaMapPin />Paphos, Cyprus</span>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default About;