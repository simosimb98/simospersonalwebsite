import './css/Education.css'
import { Element, Events, scrollSpy } from "react-scroll";

function Education() {
    return (
        <Element name="education" className="section">
            <div className="education-header">
                <h1>Education</h1>
                <div className="line"></div>
            </div>
            <div className="education-content">
                <div className="edu-section">
                    <div className="edu-description">
                        <h2>Cyprus University of Technology</h2>
                        <br/>
                        <h3>BSc in Computer Engineering & Informatics</h3>
                        <p>September 2017 - June 2022</p>
                    </div>  
                    <div className="uni-logo edu-logo">
                        <img src="/images/cut-logo.jpg" alt="cut_log" />   
                    </div>
                </div>
                <br/>
                <div className="edu-section">
                    <div className="edu-description">
                        <h2>Technical school of Paphos</h2>
                        <br/>
                        <h3>High school diploma</h3>
                        <p>September 2012 - June 2015</p>
                    </div>  
                    <div className="school-logo edu-logo">
                        <img src="/images/tech-school-logo.jpg" alt="cut_log" />   
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Education;