import React, {useContext, useState} from 'react';
import { nanoid } from 'nanoid';
import {MenuDataContext} from '../../context/MenuDataContext';
import {Link} from 'react-router-dom';
import CartItems from './CartItems';
import CartCSS from './Cart.module.css';
import banner from '../../assets/cart-banner.webp';
import cartIcon from "../../assets/cart-icon.svg";
import CartForm from './CartForm';
import LoadingSpan from '../../components/LoadingSpan';
import orderSubmitedIcon from '../../assets/order-submited.png';
import sumTotal from '../../functions/sumTotal';

const Cart = ()=>{
    const {cartItems, emptyCart} = useContext(MenuDataContext);
    const [orderSent, setOrderSent] = useState(false);
    const [submited, setSubmited] = useState(false);

    const orderElements = cartItems.filter(el => {
        return el.orders > 0;
    });
    
    const renderElements = orderElements.map(el => {
        return <CartItems key={nanoid()} data={el} />;
    });
    
    function changeOrderStatus() {
        setOrderSent(true);
        processOrder();
        emptyCart();
    };

    function processOrder() {
        setTimeout(()=>{
            setSubmited(true);
        }, 1000);
    };

    return (
        <>
        <section className={`${CartCSS.section} container`}>
            <div className={CartCSS.banner}>
                <img src={banner} alt="sales" />
            </div>
            <div className={CartCSS.title}>
                <div>
                    <img src={cartIcon} alt="cart icon" />
                    <h1>Cart</h1>
                </div>
                {
                    orderElements.length > 0?
                    <Link to='/menu'>
                            <button className={CartCSS.btn}>add more items</button>
                    </Link>
                    :
                    null
                }
            </div>
            
            {
                orderElements.length > 0 ?
                <>
                    <div className={CartCSS.wrapper}>
                        {renderElements}
                    </div>
                    <CartForm getSumPrice={sumTotal(orderElements)} orderStatus={changeOrderStatus}/>
                </>
                :
                <div className={CartCSS.emptyCart}>
                    {orderSent?
                    <div className={CartCSS.order__sent}>
                        {submited?
                            <img src={orderSubmitedIcon} alt='cheked icon' width={30} height={30} />
                        :
                            <LoadingSpan />
                        }
                        <p>Thank you for your order, you will resive a message when it's ready</p>
                    </div>
                    :
                    <>
                        <p className={CartCSS.noItems}>no items in your cart</p>
                        <Link to='/menu'>
                            <button className={CartCSS.btn}>go to menu</button>
                        </Link>
                    </>
                    }
                </div>
            }
        </section>
        </>
    );
};

export default Cart;