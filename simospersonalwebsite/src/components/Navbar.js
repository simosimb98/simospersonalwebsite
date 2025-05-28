import React, { useState } from 'react'; 
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    return(
        <>
            <div className="navbar">
                <Link to="/" className="navbar-link">
                    <FaIcons.FaHome className="navbar-icon" />
                </Link>
                <nav className={sidebar ? "navbar-menu active" : "navbar-menu"}>
                    <ul className="navbar-menu-items">
                        <li className="navbar-item">
                            <Link to="/about" className="navbar-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/projects" className="navbar-link">Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="navbar-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;