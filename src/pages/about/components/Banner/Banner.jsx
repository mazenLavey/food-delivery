import bg01 from 'assets/images/about-bg01.webp';
import bg02 from 'assets/images/about-bg02.webp';
import bg03 from 'assets/images/about-bg03.webp';
import bg04 from 'assets/images/about-bg04.webp';
import BannerCSS from './Banner.module.css';

const Banner = () => {
    return (
        <div className={BannerCSS.banner}>
            <h1>About Us</h1>
            <div className={BannerCSS.banner__bg}>
                <img src={bg01} alt="restaurant" />
                <img src={bg02} alt="restaurant" />
                <img src={bg03} alt="restaurant" />
                <img src={bg04} alt="restaurant" />
            </div>
        </div>
    )
}

export default Banner;