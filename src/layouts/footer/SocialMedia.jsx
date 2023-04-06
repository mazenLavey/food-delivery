import React from "react";
import facebookIcon from "../../assets/fb-icon.svg";
import twiterIcon from "../../assets/twitter-icon.svg";
import instagramIcon from "../../assets/insta-icon.svg";
import SocialMediaCSS from './SocialMedia.module.css';

const SocialMedia = ()=>{
    return (
        <div className={SocialMediaCSS.socialMedia}>
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
    );
};

export default SocialMedia;