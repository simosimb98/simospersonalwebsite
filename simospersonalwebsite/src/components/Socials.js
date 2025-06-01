
import * as FaIcons from 'react-icons/fa';
import { ExternalLink } from 'react-external-link'
import './css/Socials.css'

function Socials () {
    return(
        <div className="my-socials">
            <a href="https://www.instagram.com/simos_imb/" target="_blank" rel="noopener noreferrer"><FaIcons.FaLinkedin /></a>
            <a href=""><FaIcons.FaFacebook /></a>
            <a href=""><FaIcons.FaInstagramSquare /></a>
        </div>
    );
}

export default Socials;