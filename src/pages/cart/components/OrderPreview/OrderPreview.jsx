import PrimaryBtn from "components/primaryBtn/PrimaryBtn";
import CartItems from "pages/cart/components/CartItems/CartItems";
import OrderPreviewCSS from './OrderPreview.module.css';
import { useContext } from "react";
import { MenuContext } from "context/MenuContext";
import EmptyCart from "./EmptyCart";

const OrderPreview = () => {
    const { menuItems, totalPrice } = useContext(MenuContext);
    const orderElements = menuItems.filter(el => el.orders > 0);
    const cartIsEmpty = orderElements.length > 0 ? false : true;
    const renderElements = orderElements.map(el => {
        return <CartItems key={el.id} data={el} />;
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