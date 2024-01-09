import React, { useContext } from 'react';
import OrderBtnCSS from './OrderBtn.module.css';
import { MenuContext } from 'context/MenuContext';
import { notify } from 'components/alertBox/AlertBox';
import { ALERT_TYPE } from 'constants/alert';

const OrderBtn = ({ text, id, height = "45" }) => {
    const { menuItems, addToCart, removeFromCart } = useContext(MenuContext);

    const item = menuItems.find(el => el.id === id);

    function handelClick() {
        addToCart(id);
        notify(ALERT_TYPE.SUCCESS); // when adding dish to cart for the first time only
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