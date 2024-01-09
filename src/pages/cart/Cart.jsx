import { NavLink, Outlet } from "react-router-dom";
import CartHeader from "./components/CartHeader/CartHeader";
import CartCSS from "./Cart.module.css";
import { useContext } from "react";
import { MenuContext } from "context/MenuContext";

const Cart = () => {
    const { menuItems } = useContext(MenuContext);
    const cartIsEmpty = menuItems.filter(el => el.orders > 0).length > 0 ? false : true;

    return (
        <main className="container">
            <CartHeader cartIsEmpty={cartIsEmpty} />
            <div className={CartCSS.wrapper}>
                <div className={CartCSS.progress}>
                    <NavLink to="/cart">order previwe</NavLink>
                    <NavLink to="/cart/order-confirmation">information</NavLink>
                    <NavLink to="/cart/order-confirmation/checkout">payment</NavLink>
                </div>
                <Outlet />
            </div>
        </main>
    )
}

export default Cart;