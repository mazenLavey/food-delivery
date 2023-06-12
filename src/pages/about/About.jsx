import AboutCSS from './About.module.css';
import Banner from './components/Banner/Banner';
import Introduction from './components/Introduction/Introduction';
import Restaurants from './components/Restaurants/Restaurants';

const About = () => {
    return (
        <main>
            <Banner />
            <div className={`${AboutCSS.section} container`}>
                <Introduction />
                <Restaurants />
            </div>
        </main>
    );
};

export default About