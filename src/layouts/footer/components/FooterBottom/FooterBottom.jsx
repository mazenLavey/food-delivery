import FooterBottomCSS from './FooterBottom.module.css';
import facebookIcon from "assets/svg/fb-icon.svg";
import twiterIcon from "assets/svg/twitter-icon.svg";
import instagramIcon from "assets/svg/insta-icon.svg";

const FooterBottom = () => {
    function getCurrentYear() {
        let date = new Date().getFullYear()
        return date
    }

    return (
        <div className={FooterBottomCSS.wrapper}>
            <div className={FooterBottomCSS.socialMedia}>
                <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer noopener">
                    <img src={instagramIcon} alt="instagram link" />
                </a>
                <a href="https://twitter.com/" target={"_blank"} rel="noreferrer noopener">
                    <img src={twiterIcon} alt="twitter link" />
                </a>
                <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer noopener">
                    <img src={facebookIcon} alt="facebook link" />
                </a>
            </div>
            <div className={FooterBottomCSS.copyRight}>
                <p>&#169; {getCurrentYear()} Yellow kitchen</p>
            </div>
        </div>
    )
}

export default FooterBottom;