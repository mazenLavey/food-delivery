import React from "react";
import { Link } from "react-router-dom";
import LogoCSS from './Logo.module.css';
import logoDark from "../assets/logo.svg";
import logoLight from "../assets/Logo-light.png";

const Logo = ({light = false})=>{
    return (
        <Link to='/'>
            <img src={light? logoLight : logoDark} alt="logo" className={LogoCSS.logo} />
        </Link>
    );
};

export default Logo;