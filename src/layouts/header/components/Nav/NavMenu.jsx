import React, { useState } from "react";
import NavMenuCSS from './NavMenu.module.css';
import { Link } from 'react-router-dom';
import routes from "routes";

const NavMenu = () => {
    const [navMenuIsActive, setNavMenuIsActive] = useState(false);

    function NavMenuToggle() {
        setNavMenuIsActive(oldValue => !oldValue)
    }

    return (
        <>
            <div className={NavMenuCSS.element} >
                <div className={NavMenuCSS.icon} onClick={NavMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {navMenuIsActive ?
                    <>
                        <ul className={NavMenuCSS.dropDown}>
                            <li><Link to={routes.home} onClick={NavMenuToggle}>Home</Link></li>
                            <li><Link to={routes.about} onClick={NavMenuToggle}>About</Link></li>
                            <li><Link to={routes.menu} onClick={NavMenuToggle}>Menu</Link></li>
                            <li><Link to={routes.contact} onClick={NavMenuToggle}>Contact</Link></li>
                            <li><Link to={routes.help} onClick={NavMenuToggle}>Help</Link></li>
                        </ul>
                        <div className={NavMenuCSS.layout} onClick={NavMenuToggle}></div>
                    </>
                    :
                    null
                }
            </div>
        </>
    );
}

export default NavMenu;