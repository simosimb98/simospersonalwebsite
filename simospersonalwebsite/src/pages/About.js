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
                <div className="profile-picture-about">
                    <img width="500" height="500" src="https://scontent.fnic1-2.fna.fbcdn.net/v/t39.30808-6/416152826_7034023896693967_3832700787944172278_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Kr_NJSj-rL4Q7kNvwGOKSFI&_nc_oc=AdkFwQCu7MTZ3ndcFdrLJaWqpfCv_4F8vlwIfT7d19nagfwLcae5ztC1DA5dov0FiMU&_nc_zt=23&_nc_ht=scontent.fnic1-2.fna&_nc_gid=E5CRJ_NBKr5TJHdHlohiow&oh=00_AfL6PXqrrbEo-PQMlohOnZh3yTIE4mjkPzijlnfYpx4V4w&oe=68450DEB" alt="Simos Imbraem"/>
                </div>
                <div className="about-me-text">
                    <h2>Full stack developer!</h2><br/>
                    <h3>
                        Passionate developer based in Cyprus.
                    </h3>
                    <br/>
                    <p>
                        A passionate fullstack developer with a sharp eye for both front-end aesthetics and back-end efficiency. Skilled in building responsive, user-friendly interfaces and robust server-side systems. Thrives in dynamic environments, turning complex ideas into seamless digital experiences. Continuously learning and evolving with the latest technologies. Driven by curiosity, creativity, and clean code.
                    </p>
                </div>
            </div>
        </Element>
    );
}

export default About;