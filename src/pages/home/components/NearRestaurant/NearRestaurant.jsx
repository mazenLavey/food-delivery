import React, { useState } from 'react';
import NearRestaurantCSS from "./NearRestaurant.module.css";
import locationIcon from "assets/svg/location-icon.svg";

const NearRestaurant = () => {
    const [userInput, setUserInput] = useState('');

    function handelInput(e) {
        setUserInput(e.target.value)
    };

    function handelForm(e) {
        e.preventDefault();
        setUserInput('');
    };

    return (
        <>
            <section className={NearRestaurantCSS.section}>
                <div className={`${NearRestaurantCSS.wrapper} container`}>
                    <div>
                        <h2>Your nearest restaurants</h2>
                        <p>Each kitchen works with its own delivery area <br />to deliver food to you as soon as possible</p>
                    </div>
                    <form onSubmit={handelForm} className={NearRestaurantCSS.form}>
                        <div className={NearRestaurantCSS.search__bar}>
                            <img src={locationIcon} alt="location icon" />
                            <input type="search" name="userInput" id="userInput" value={userInput} onChange={handelInput} placeholder="Enter delivery address" />
                        </div>
                        <button type="submit" className={NearRestaurantCSS.btn}>Send</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default NearRestaurant;