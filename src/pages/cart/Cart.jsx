import { NavLink, Outlet } from "react-router-dom";
import CartHeader from "./components/CartHeader/CartHeader";
import CartCSS from "./Cart.module.css";
import { useContext } from "react";
import { MenuContext } from "context/MenuContext";
import routes from "routes";

const Cart = () => {
    const { menuItems } = useContext(MenuContext);
    const cartIsEmpty = menuItems.filter(el => el.orders > 0).length > 0 ? false : true;

    return (
        <main className="container">
            <CartHeader cartIsEmpty={cartIsEmpty} />
            <div className={CartCSS.wrapper}>
                <div className={CartCSS.progress}>
                    <NavLink to={routes.cart}>order previwe</NavLink>
                    <NavLink to={routes.orderConfirmation}>information</NavLink>
                    <NavLink to={routes.checkout}>payment</NavLink>
                </div>
                <Outlet />
            </div>
        </main>
    )
}

export default Cart;