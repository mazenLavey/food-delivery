import React from 'react';
import CartItemCSS from './styles/CartItem.module.css';
import OrderBtn from '../../components/OrderBtn';
import priceFormatter from '../../functions/priceFormatter';

const CartItems = ({ data }) => {

    return (
        <>
            <div className={CartItemCSS.card}>
                <div className={CartItemCSS.header}>
                    <img src={data.image.src} alt={data.image.alt} />
                    <h3>{data.title}</h3>
                </div>
                <div className={CartItemCSS.price}>
                    <p>{priceFormatter(data.price)} x {data.orders} = {priceFormatter(data.price * data.orders)} </p>
                    <OrderBtn text='Add to Cart' id={data.id} height='30' />
                </div>
            </div>
        </>
    );
};

export default CartItems;