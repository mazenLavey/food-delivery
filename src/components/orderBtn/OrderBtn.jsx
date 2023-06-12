import React, { useContext } from 'react';
import OrderBtnCSS from './OrderBtn.module.css';
import { MenuDataContext } from 'context/MenuDataContext';

const OrderBtn = ({ text, id, height = "45" }) => {
    const { cartItems, addToCart, removeFromCart, newItemIsAdded } = useContext(MenuDataContext);
    const item = cartItems.find(el => el.id === id);

    function handelClick() {
        addToCart(id);
        newItemIsAdded();
    };

    return (
        <div className={OrderBtnCSS.Order} style={{ height: `${height}px` }}>
            {
                item && item.orders > 0 ?
                    <div className={OrderBtnCSS.controlOrder}>
                        <button onClick={() => addToCart(id)}>+</button>
                        <input type="text" value={item.orders} disabled />
                        <button onClick={() => removeFromCart(id)}>-</button>
                    </div>
                    :
                    <>
                        <button className={OrderBtnCSS.addToBtn} onClick={handelClick}>{text}</button>
                    </>
            }
        </div>
    );
};

export default OrderBtn;