import React from 'react';
import Map from './Map';
import ContactCSS from './Contact.module.css';
import ContactForm from '../../components/ContactForm';

const Contact = ()=>{

    return (
        <>
        <div className={`${ContactCSS.section} container`}>
            <div className={ContactCSS.wrappe}>
                <ContactForm />
                <div className={ContactCSS.address}>
                    <h2>Our Address</h2>
                    <p>Yellow kitchen Paris 11, 69 avenue de la Republique 75011 Paris, <br /> +800 111 126, contact@yellowkitchens.com</p>
                </div>
            </div>
            <Map />
        </div>
        </>
    );
};

export default Contact;