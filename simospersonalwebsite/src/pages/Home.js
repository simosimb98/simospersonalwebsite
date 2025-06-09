import './css/Home.css';
import { useNavigate } from "react-router-dom";
import About from './About.js';
import Education from './Education.js';
import Projects from './Projects.js';
import TechStack from './TechStack.js';

function Home() {
  const navigateToAbout = useNavigate();

  return (
    <>
    <div className="home-section">
      <div className="profile-picture">
        <img src="/images/simos_imbraem_logo_1_new_resized.png" alt="Simos Imbraem"/>
      </div>
      <div className="welcome-text">
        <h4>Hello there!</h4>
        <h1>
          I am<span> Simos Imbraem</span><br />
          a Full Stack Developer
        </h1>
        <button
          className="home-about-button"
          onClick={() => navigateToAbout('/about')}
        >
          GET TO KNOW ABOUT ME!
        </button>
      </div>
    </div>
    <About/>
    <Education/>
    <TechStack/>
    <Projects owner="simosimb98"/>
    </>
  );
}

export default Home;