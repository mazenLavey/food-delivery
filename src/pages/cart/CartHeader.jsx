import { Link } from 'react-router-dom';
import CartHeaderCSS from './styles/CartHeader.module.css';
import cartIcon from "../../assets/cart-icon.svg";

const CartHeader = ({ cartIsEmpty }) => {
    return (
        <div className={CartHeaderCSS.title}>
            <div>
                <img src={cartIcon} alt="cart icon" />
                <h1>Cart</h1>
            </div>
            {
                cartIsEmpty ?
                    null
                    :
                    <Link to='/menu'>
                        <button className="btnPrimary">add more items</button>
                    </Link>
            }
        </div>
    )
}

export default CartHeader;