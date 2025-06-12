import './css/Home.css';
import { useNavigate } from "react-router-dom";
import About from './About.js';
import Education from './Education.js';
import Projects from './Projects.js';
import TechStack from './TechStack.js';
import Footer from '../components/Footer.js';
import TsParticles from '../components/TsParticles.js';
import Button from '@mui/material/Button';
import { Link } from "react-scroll";
import { Element } from "react-scroll";

function Home() {
  const navigateToAbout = useNavigate();

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href="/files/Simos_Imbraem_Resume_WEB_DEV_CEI.pdf";
    link.download = "Simos_Imbraem_Resume";

    link.click();
  };

  return (
    <>
    <Element name="home">
      <div className="home-section">
        <TsParticles/>
        <div className="profile-picture-home">
          <img src="/images/Untitled-3.svg" alt="Simos Imbraem"/>
        </div>
        <div className="welcome-text">
          <h4>Hello there!</h4>
          <h1>
            I am<span> Simos Imbraem</span><br />
            a Full Stack Developer
          </h1>
          <div className="btn-group-home">
                                            
            <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">
              <Button variant="contained" sx={{backgroundColor: '#007399 !important'}}>About me</Button>
            </Link>
            
            <Button variant="contained" sx={{backgroundColor: '#007399 !important'}} onClick={downloadResume}>Download Resume</Button>
          </div>
        </div>
      </div>
    </Element>
    <About/>
    <Education/>
    <TechStack/>
    <Projects owner="simosimb98"/>
    <Footer/>
    </>
  );
}

export default Home;