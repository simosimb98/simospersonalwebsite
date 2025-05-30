import React, { useState } from 'react'; 
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import Socials from './Socials';
// import pfp from '/public/simos_london_bridge.jpg';

import './Navbar.css';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return(
        <>
            <div className="navbar">
                <Link to="/" className="menu-bars">
                    <FaIcons.FaAlignJustify className="navbar-icon" onClick={showSidebar} />
                </Link>
            </div>
            
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <div className='profile-picture'>
                    {/* <img src="/public/simos_london_bridge.jpg" /> */}
                </div>

                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'><FaIcons.FaRegWindowClose  onClick={showSidebar}/></Link>
                    </li>
                    {SideBarData.map((itm,idx)=> {
                        return(
                            <li className={itm.clName} key={idx}>
                                <Link to={itm.path}>{itm.icon} <span>{itm.title}</span></Link>
                            </li>
                        );
                    })}
                </ul>

                <Socials/>
            </nav>


        </>
    );
}

export default Navbar;