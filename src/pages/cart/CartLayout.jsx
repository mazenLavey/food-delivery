import { NavLink, Outlet } from "react-router-dom";
import CartHeader from "./CartHeader";
import CartLayoutCSS from "./styles/CartLayout.module.css";
import { useContext } from "react";
import { MenuDataContext } from "../../context/MenuDataContext";

const CartLayout = () => {
    const { cartItems } = useContext(MenuDataContext);
    const cartIsEmpty = cartItems.filter(el => el.orders > 0).length > 0 ? false : true;

    return (
        <main className="container">
            <CartHeader cartIsEmpty={cartIsEmpty} />
            <div className={CartLayoutCSS.wrapper}>
                <div className={CartLayoutCSS.progress}>
                    <NavLink to="/cart">order previwe</NavLink>
                    <NavLink to="/cart/order-confirmation">information</NavLink>
                    <NavLink to="/cart/order-confirmation/checkout">payment</NavLink>
                </div>
                <Outlet />
            </div>

        </main>
    )
}

export default CartLayout;