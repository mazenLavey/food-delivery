import HeroCSS from './Hero.module.css';
import timeEatIcon from "assets/svg/time-eat-icon.svg";
import deliveryIcon from "assets/svg/delivery-icon.svg";
import parisIcon from "assets/svg/paris-icon.svg";
import { useNavigate } from 'react-router-dom';
import { MenuContext } from 'context/MenuContext';
import { ORDER_TYPE } from 'constants/order';
import routes from 'routes';
import { useContext } from 'react';

const Hero = () => {
    const { setOrderType } = useContext(MenuContext);
    const navigate = useNavigate();

    const handleClick = (orderType) => {
        setOrderType(orderType)
        navigate(routes.menu)
    }

    return (
        <>
            <div className={HeroCSS.background}></div>
            <section className={`${HeroCSS.section} container`}>
                <div className={HeroCSS.wrapper}>
                    <div className={HeroCSS.text}>
                        <h1>Your Food Court <br />At Home</h1>
                        <div className={HeroCSS.btn}>
                            <button onClick={() => handleClick(ORDER_TYPE.DELIVERY)}>
                                <p>Delivery</p>
                                <p>Order Now</p>
                            </button>
                            <button onClick={() => handleClick(ORDER_TYPE.TAKEOUT)}>
                                <p>Takeout</p>
                                <p>Grab and go</p>
                            </button>
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