import React from "react";
import HeaderCSS from './Header.module.css';
import { useLocation } from "react-router-dom";
import NavMenu from "./NavMenu";
import PrimaryBtn from '../../components/PrimaryBtn';
import CartIcon from '../../components/CartIcon';
import Logo from '../../components/Logo';


function Header() {
    const location = useLocation();
    const showOrderBtn = location.pathname === '/' || location.pathname === '/about';

    return (
        <header className={HeaderCSS.section}>
            <div className={`${HeaderCSS.wrapper} container `}>
                <Logo light={false} />
                <nav className={HeaderCSS.nav}>
                    {showOrderBtn ? <PrimaryBtn link='/menu' text='Order Now' type='yellow' /> : null}
                    <CartIcon />
                    <NavMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header;