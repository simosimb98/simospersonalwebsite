
import * as FaIcons from 'react-icons/fa';
import { ExternalLink } from 'react-external-link'
import './css/Socials.css'

function Socials () {
    return(
        <div className="my-socials">
            <a href="https://www.linkedin.com/in/simos-imbraem-170290241/" target="_blank" rel="noopener noreferrer"><FaIcons.FaLinkedin /></a>
            <a href="https://github.com/simosimb98" target="_blank" rel="noopener noreferrer"><FaIcons.FaGithub /></a>
            <a href="https://www.facebook.com/Simos1598" target="_blank" rel="noopener noreferrer"><FaIcons.FaFacebook /></a>
            <a href="https://www.instagram.com/simos_imb/" target="_blank" rel="noopener noreferrer"><FaIcons.FaInstagram /></a> 
            <a href="mailto:simimb98@gmail.com"><FaIcons.FaMailBulk /></a> 
        </div>
    );
}

export default Socials;