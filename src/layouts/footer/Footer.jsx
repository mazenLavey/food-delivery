import FooterCSS from "./Footer.module.css";
import FooterBottom from "./components/FooterBottom/FooterBottom";
import FooterTop from "./components/FooterTop/FooterTop";

const Footer = () => {
    return (
        <footer className={FooterCSS.TopWrapper}>
            <div className="container">
                <FooterTop />
            </div>
            <div className={FooterCSS.BottomWrapper}>
                <div className="container">
                    <FooterBottom />
                </div>
            </div>
        </footer>
    );
}

export default Footer;