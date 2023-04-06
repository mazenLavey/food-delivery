import React from 'react';
import HelpCSS from './Help.module.css';
import {Link} from 'react-router-dom';

const Help = ()=>{
    return (
        <>
            <section className={`${HelpCSS.section} container`}>
                <h1 className={HelpCSS.title}>Help</h1>
                <div className={HelpCSS.wrapper}>
                    <Link to="/help/FAQs">
                        <div className={HelpCSS.card}>
                            <h2>FAQs</h2>
                        </div>
                    </Link>
                    <Link to="/help/privacy-policy">
                        <div className={HelpCSS.card}>
                            <h2>Privacy Policy</h2>
                        </div>
                    </Link>
                    <Link to="/help/terms">
                        <div className={HelpCSS.card}>
                            <h2>Terms</h2>
                        </div>
                    </Link>
                    <Link to='/contact'>
                        <div className={HelpCSS.card}>
                            <h2>Contact Us</h2>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Help;