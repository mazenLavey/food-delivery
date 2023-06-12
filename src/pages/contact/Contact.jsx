import React from 'react';
import Map from 'pages/contact/components/map/Map';
import ContactCSS from './Contact.module.css';
import ContactForm from 'pages/contact/components/contactForm/ContactForm';

const Contact = () => {
    return (
        <main className={`${ContactCSS.section} container`}>
            <div className={ContactCSS.wrappe}>
                <ContactForm />
                <div className={ContactCSS.address}>
                    <h2>Our Address</h2>
                    <p>Yellow kitchen Paris 11, 69 avenue de la Republique 75011 Paris, <br /> +800 111 126, contact@yellowkitchens.com</p>
                </div>
            </div>
            <Map />
        </main>
    );
};

export default Contact;