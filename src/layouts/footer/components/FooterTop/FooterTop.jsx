import Logo from 'components/logo/Logo';
import appleStoreIcon from "assets/images/apple-store-icon.png";
import googleStoreIcon from "assets/images/google-store-icon.png";
import { Link } from 'react-router-dom';
import FooterTopCSS from './FooterTop.module.css';
import routes from 'routes';

const FooterTop = () => {
    return (
        <div className={FooterTopCSS.info}>
            <div className={FooterTopCSS.store__links}>
                <Logo light={true} />
                <a href="https://www.apple.com/app-store/" target={"_blank"} rel="noreferrer noopener">
                    <img src={appleStoreIcon} alt="apple store" />
                </a>
                <a href="https://store.google.com/" target={"_blank"} rel="noreferrer noopener">
                    <img src={googleStoreIcon} alt="google store" />
                </a>
            </div>
            <div>
                <h2>Navigation</h2>
                <ul>
                    <li><Link to={routes.home}>Home</Link></li>
                    <li><Link to={routes.about}>About</Link></li>
                    <li><Link to={routes.menu}>Menu</Link></li>
                    <li><Link to={routes.cart}>Cart</Link></li>
                </ul>
            </div>
            <div>
                <h2>Get Help</h2>
                <ul>
                    <li><Link to={routes.faq}>Read FAQs</Link></li>
                    <li><Link to={routes.privacyPolicy}>Privacy Policy</Link></li>
                    <li><Link to={routes.terms}>Terms</Link></li>
                    <li><Link to={routes.contact}>Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h2>Address</h2>
                <p>Yellow kitchen Paris 11</p>
                <p>69 avenue de la Republique 75011 Paris</p>
                <p>+800 111 126</p>
            </div>
        </div>
    )
}

export default FooterTop;