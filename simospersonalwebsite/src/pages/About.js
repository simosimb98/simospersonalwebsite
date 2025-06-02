import { Element, Events, scrollSpy } from "react-scroll";
import './css/About.css';

function About() {
    return(
        <Element name="about" className="section">
            <div className="about-me">
                <h1>About me</h1>
                <div className="line"></div>
            </div>
        </Element>
    );
}

export default About;