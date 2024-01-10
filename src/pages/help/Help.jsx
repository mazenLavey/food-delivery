import HelpCSS from './Help.module.css';
import { Link } from 'react-router-dom';
import routes from 'routes';

const Help = () => {
    return (
        <main className={`${HelpCSS.section} container`}>
            <h1 className={HelpCSS.title}>Help</h1>
            <div className={HelpCSS.wrapper}>
                <Link to={routes.faq}>
                    <div className={HelpCSS.card}>
                        <h2>FAQs</h2>
                    </div>
                </Link>
                <Link to={routes.privacyPolicy}>
                    <div className={HelpCSS.card}>
                        <h2>Privacy Policy</h2>
                    </div>
                </Link>
                <Link to={routes.terms}>
                    <div className={HelpCSS.card}>
                        <h2>Terms</h2>
                    </div>
                </Link>
                <Link to={routes.contact}>
                    <div className={HelpCSS.card}>
                        <h2>Contact Us</h2>
                    </div>
                </Link>
            </div>
        </main>
    );
};

export default Help;