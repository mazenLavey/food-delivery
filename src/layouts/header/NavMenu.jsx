import React, {useState} from "react";
import NavMenuCSS from './NavMenu.module.css';
import {Link} from 'react-router-dom';

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
            {navMenuIsActive?
                <>
                    <ul className={NavMenuCSS.dropDown}>
                        <li><Link to="/" onClick={NavMenuToggle}>Home</Link></li>
                        <li><Link to="/about" onClick={NavMenuToggle}>About</Link></li>
                        <li><Link to="/menu" onClick={NavMenuToggle}>Menu</Link></li>
                        <li><Link to="/contact" onClick={NavMenuToggle}>Contact</Link></li>
                        <li><Link to="/help" onClick={NavMenuToggle}>Help</Link></li>
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