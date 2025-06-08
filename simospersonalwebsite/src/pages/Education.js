import './css/Education.css'
import { Element, Events, scrollSpy } from "react-scroll";

function Education() {
    return (
        <Element name="education" className="section">
            <div className="education-header">
                <h1>Education</h1>
                <div className="line"></div>
            </div>
                <div className="uni">
                    <div className="university-description">
                        <h2>Cyprus University of Technology</h2>
                        <br/>
                        <h3>BSc in Computer Engineering & Informatics</h3>
                        <p>September 2017 - June 2022</p>
                    </div>  
                    <div className="uni-logo edu-logo">
                        <img src="https://accept.cyi.ac.cy/wp-content/uploads/2021/07/home-logo-4.jpg" alt="cut_log" />   
                    </div>
                </div>
                <br/>
                <div className="school">
                    <div className="school-description">
                        <h2>Technical school of Paphos</h2>
                        <br/>
                        <h3>High school diploma</h3>
                        <p>September 2012 - June 2015</p>
                    </div>  
                    <div className="school-logo edu-logo-school">
                        <img src="https://scontent.fnic1-2.fna.fbcdn.net/v/t39.30808-6/310662234_589042806343674_7326302994637413038_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0buVZ87PwxoQ7kNvwECOnBG&_nc_oc=AdnP2XMZRLcUJ9b0G-a08jGe1YjN_TZ8reQtpL9bKqmpXfpdyBseeZ4zx5nr6XUkkAs&_nc_zt=23&_nc_ht=scontent.fnic1-2.fna&_nc_gid=02vz32KkWDLpVvA0Kc4dPg&oh=00_AfO_k_WEHNIMM8rlrPYm26ZHd017auk1TdiLDP49_oZz9A&oe=684AFF47" alt="cut_log" />   
                    </div>
                </div>
        </Element>

    );
}

export default Education;