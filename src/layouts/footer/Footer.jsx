import React from "react";
import FooterCSS from "./Footer.module.css";
import Logo from '../../components/Logo';
import SocialMedia from './SocialMedia';
import CopyRight from './CopyRight';
import appleStoreIcon from "../../assets/apple-store-icon.png";
import googleStoreIcon from "../../assets/google-store-icon.png";
import {Link} from 'react-router-dom';

function Footer() {
    
    return (
        <footer className={FooterCSS.footer}>
            <div className="container">
                <div className={FooterCSS.info}>
                    <div className={FooterCSS.store__links}>
                        <Logo light={true} />
                        <a href="https://www.apple.com/app-store/" target={"_blank"} rel="noreferrer noopener">
                            <img src={appleStoreIcon} alt="apple store" />
                        </a>
                        <a href="https://store.google.com/" target={"_blank"} rel="noreferrer noopener">
                            <img src={googleStoreIcon} alt="google store"/>
                        </a>
                    </div>
                    <div>
                        <h2>Navigation</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Get Help</h2>
                        <ul>
                            <li><Link to='/help/FAQs'>Read FAQs</Link></li>
                            <li><Link to='/help/privacy-policy'>Privacy Policy</Link></li>
                            <li><Link to='/help/terms'>Terms</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Address</h2>
                        <p>Yellow kitchen Paris 11</p>
                        <p>69 avenue de la Republique 75011 Paris</p>
                        <p>+800 111 126</p>
                    </div>
                </div>
            </div>
            <div className={FooterCSS.links}>
                <div className={`${FooterCSS.links__wrapper} container`}>
                    <SocialMedia />
                    <CopyRight />
                </div>
            </div>
        </footer>
    );
}

export default Footer;