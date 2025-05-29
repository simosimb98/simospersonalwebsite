import React, { useState } from 'react'; 
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './Navbar.css';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return(
        <>
            <div className="navbar">
                <Link to="/" className="navbar-link">
                    <FaIcons.FaHome className="navbar-icon" onClick={showSidebar} />
                </Link>
            </div>
            
            <nav className={sidebar ? "navbar-menu active" : "navbar-menu"}>
                <ul className="navbar-menu-items">
                    <li className="nav-text">
                        <Link to="/"><FaIcons.FaRegWindowClose /> <span>Close</span></Link>
                    </li>
                    {SideBarData.map((itm,idx)=> {
                        return(
                            <li className={itm.clName} key={idx}>
                                <Link to={itm.path}>{itm.icon} <span>{itm.title}</span></Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;