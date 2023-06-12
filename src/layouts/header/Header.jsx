import React from "react";
import HeaderCSS from './Header.module.css';
import { useLocation } from "react-router-dom";
import NavMenu from "./components/Nav/NavMenu";
import CartIcon from './components/cartIcon/CartIcon';
import PrimaryBtn from 'components/primaryBtn/PrimaryBtn';
import Logo from 'components/logo/Logo';

const Header = () => {
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