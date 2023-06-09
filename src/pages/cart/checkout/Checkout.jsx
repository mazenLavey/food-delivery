import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import orderSubmitedIcon from 'assets/images/order-submited.png';
import CheckoutCSS from './Checkout.module.css';
import { useEffect, useState } from 'react';

const Checkout = () => {
    const [loadPayment, setLoadPayment] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoadPayment(true)
        }, 1000)
    }, []);

    return (
        <div className={CheckoutCSS.wrapper}>
            {
                loadPayment ?
                    <>
                        <img src={orderSubmitedIcon} alt='cheked icon' width={30} height={30} />
                        <p>Thank you for your order, you will resive a message when it's ready</p>
                    </>
                    :
                    <LoadingSpan />
            }
        </div>
    )
}
export default Checkout;