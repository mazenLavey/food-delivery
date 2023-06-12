import HomeNavCSS from './HomeNav.module.css';

const HomeNav = () => {
    return (
        <div className={HomeNavCSS.subNav}>
            <ul className={`${HomeNavCSS.list} container`}>
                <li><a href="#restaurants">Restaurants</a></li>
                <li><a href="#specialities">Specialities</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
        </div>
    );
};

export default HomeNav;