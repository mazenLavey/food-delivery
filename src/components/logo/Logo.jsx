import React from "react";
import { Link } from "react-router-dom";
import LogoCSS from './Logo.module.css';
import logoDark from "assets/svg/logo.svg";
import logoLight from "assets/images/Logo-light.png";
import routes from "routes";

const Logo = ({ light = false }) => {
    return (
        <Link to={routes.home}>
            <img src={light ? logoLight : logoDark} alt="logo" className={LogoCSS.logo} />
        </Link>
    );
};

export default Logo;