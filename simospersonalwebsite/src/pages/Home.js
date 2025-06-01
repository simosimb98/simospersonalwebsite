import { colors } from '@mui/material';
import './Home.css';
import Button from '@mui/material/Button';

function Home() {
    return(
        <>
            <div className="profile-picture">
                <img width="300" height="300" src="/images/simos_imbraem_logo_1_new.png"/>
            </div>
            <div className="welcome-text">
                <h4>Hello there!</h4>
                <h1>I am<span> Simos Imbraem</span><br />a Full Stack Developer</h1>
                <button className="home-about-button">GET TO KNOW ABOUT ME!</button>
            </div>
        </>
    )
}

export default Home;