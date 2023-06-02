import { nanoid } from "nanoid";
import PrimaryBtn from "../../components/PrimaryBtn";
import CartItems from "./CartItems";
import OrderPreviewCSS from './styles/OrderPreview.module.css';
import { useContext } from "react";
import { MenuDataContext } from "../../context/MenuDataContext";
import EmptyCart from "./EmptyCart";

const OrderPreview = () => {
    const { cartItems, totalPrice } = useContext(MenuDataContext);

    const orderElements = cartItems.filter(el => el.orders > 0);

    const cartIsEmpty = orderElements.length > 0 ? false : true;

    const renderElements = orderElements.map(el => {
        return <CartItems key={nanoid()} data={el} />;
    });

    return (
        <>
            {
                cartIsEmpty ?
                    <EmptyCart />
                    :
                    <div className={OrderPreviewCSS.wrapper}>
                        <div className={OrderPreviewCSS.items}>
                            {renderElements}
                        </div>
                        <aside className={OrderPreviewCSS.orderBox}>
                            <p>Total: <strong>{totalPrice}</strong></p>
                            <PrimaryBtn link={"/cart/order-confirmation"} text={"Submit Order"} />
                        </aside>
                    </div>
            }
        </>
    )
}

export default OrderPreview;