import EmptyCartCSS from './EmptyCart.module.css';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className={EmptyCartCSS.emptyCart}>
            <p className={EmptyCartCSS.noItems}>no items in your cart</p>
            <Link to='/menu'>
                <button className="btnPrimary">go to menu</button>
            </Link>
        </div>
    )
}

export default EmptyCart;