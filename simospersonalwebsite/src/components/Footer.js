import { Element, Events, scrollSpy } from "react-scroll";
import './css/Footer.css';
import './css/Socials.css';
import Socials from './Socials.js';
import * as FaIcons from 'react-icons/fa';

function Footer() {
    return(
        <Element name="contact" className="section-footer">
            <div className="footer">
                <Socials/>
                <br/><br/>
                <p><FaIcons.FaRegCopyright/>&nbsp;Designed and developed by Simos Imbraem</p>
            </div>
        </Element>
    );
}

export default Footer;