import React, { useContext } from "react";
import cartIcon from "assets/svg/cart-icon.svg";
import CartIconCSS from './CartIcon.module.css';
import { MenuContext } from "context/MenuContext";
import { Link } from 'react-router-dom';


const CartIcon = () => {
    const { numItemsInCart } = useContext(MenuContext);

    return (
        <Link to="/cart" className={CartIconCSS.icon}>
            <img src={cartIcon} alt="cart icon" />
            {numItemsInCart > 0 ?
                <span>{numItemsInCart}</span>
                :
                null
            }

        </Link>
    );
};

export default CartIcon;