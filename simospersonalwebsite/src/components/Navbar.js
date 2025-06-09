import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SideBarData } from './SideBarData';
import Socials from './Socials';
import './css/Navbar.css';
import { Link, Element, Events, scrollSpy } from "react-scroll";

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return(
        <>
            <div className="navbar">
                <Link to="/" className="menu-bars hamburger-icon">
                    <FaIcons.FaAlignJustify className="navbar-icon" onClick={showSidebar} />
                </Link>
                <div className="navbar-main">
                    {SideBarData.map((itm,idx)=> {
                        return(
                            <li className={itm.clName} key={idx}>
                                <Link to={itm.path} smooth={true} duration={500} spy={true} activeClass="active">
                                    {itm.icon} <span>{itm.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </div>
            </div>
            
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'><FaIcons.FaRegWindowClose  onClick={showSidebar}/></Link>
                    </li>
                    {SideBarData.map((itm,idx)=> {
                        return(
                            <li className={itm.clName} key={idx}>
                                <Link to={itm.path} onClick={showSidebar} smooth={true} duration={500} spy={true} activeClass="active">
                                    {itm.icon} <span>{itm.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;