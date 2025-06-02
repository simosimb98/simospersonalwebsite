import { Element, Events, scrollSpy } from "react-scroll";
import './css/About.css';

function About() {
    return(
        <Element name="about" className="section">
            <div className="about-me-header">
                <h1>About me</h1>
                <div className="line"></div>
            </div>
            <div className="about-me-items">
                <div className="about-me-text">
                    <h2>Thanks for stopping by!</h2><br/>
                    <p>
                        Hey there everyone, my name is Simos and I am proffesional web developer, delivering high end and responsive websites.<br/>
                        I am a passionate developer dealing with both back-end and front-end work.<br/> You can navigate below to check out more about me,
                        my education, my proffesional work experience and more!
                    </p>
                </div>
                <div className="profile-picture-about">
                    <img width="60%" height="60%" src="https://media.licdn.com/dms/image/v2/D4E03AQHehoS-whqfvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1733059864572?e=1754524800&v=beta&t=invaKEcCZvnKu6HJ21Asbsay7oo3J2T34qaQSnU0eSE" alt="Simos Imbraem"/>
                </div>
            </div>

        </Element>
    );
}

export default About;