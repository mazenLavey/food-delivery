import EmptyCartCSS from './EmptyCart.module.css';
import { Link } from 'react-router-dom';
import routes from 'routes';

const EmptyCart = () => {
    return (
        <div className={EmptyCartCSS.emptyCart}>
            <p className={EmptyCartCSS.noItems}>no items in your cart</p>
            <Link to={routes.menu}>
                <button className="btnPrimary">go to menu</button>
            </Link>
        </div>
    )
}

export default EmptyCart;