import React from "react";
import HeroCSS from './Hero.module.css';
import timeEatIcon from "../../assets/time-eat-icon.svg";
import deliveryIcon from "../../assets/delivery-icon.svg";
import parisIcon from "../../assets/paris-icon.svg";
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <>
            <div className={HeroCSS.background}></div>
            <section className={`${HeroCSS.section} container`}>
                <div className={HeroCSS.wrapper}>
                    <div className={HeroCSS.text}>
                        <h1>Your Food Court <br />At Home</h1>
                        <div className={HeroCSS.btn}>
                            <Link to='/menu'>
                                <button>
                                    <p>Delivery</p>
                                    <p>Order Now</p>
                                </button>
                            </Link>
                            <Link to='/menu'>
                                <button>
                                    <p>Takeout</p>
                                    <p>Grab and go</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className={HeroCSS.info}>
                    <div>
                        <img src={timeEatIcon} alt="time eat icon" />
                        <p>delivery in all paris <br />in less than 30 minutes</p>
                    </div>
                    <div>
                        <img src={deliveryIcon} alt="delivery icon" />
                        <p>Free delivery <br />from 29 euros</p>
                    </div>
                    <div>
                        <img src={parisIcon} alt="paris icon" />
                        <p>Only fresh <br />and French products</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;