import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { MenuContext } from 'context/MenuContext';
import { useNavigate } from 'react-router-dom';
import CartFormCSS from './CartForm.module.css';
import deliveryIcon from 'assets/svg/time-eat-icon.svg';
import payWithCard from 'assets/images/pay-with-card-icons.png';
import { useFormik } from 'formik';
import { cartFormSchema } from 'schema/FormSchema';
import { ORDER_TYPE } from 'constants/order';

const CartForm = () => {
    const { totalPrice, emptyCart, orderType } = useContext(MenuContext);
    const { restaurants, isLoading } = useContext(GlobalContext);

    const navigate = useNavigate();

    const { values, errors, touched, isValid, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            deliveryMethod: orderType,
            clientName: '',
            phoneNumber: '',
            personNum: '',
            address: '',
            restaurant: '',
            AddInfo: '',
            paymentMethod: ''
        },
        validationSchema: cartFormSchema,
        onSubmit: (values, actions) => {
            actions.resetForm();
            emptyCart();
            navigate("/cart/order-confirmation/checkout");
        }
    });

    function renderRestaurantsList() {
        if (isLoading) return;

        const selectElement = restaurants.map(el => <option key={el.id} value={el.name}>{el.name}</option>);
        return selectElement;
    };

    return (
        <form className={CartFormCSS.form} onSubmit={handleSubmit}>
            <div className={CartFormCSS.body}>
                <div className={CartFormCSS.order__type}>
                    <h3>How do you want to recive your order?<sup style={{ color: 'red' }}>*</sup></h3>
                    <div className={CartFormCSS.form__radio}>
                        <input type="radio" name='deliveryMethod' id='delivery' value='delivery' checked={values.deliveryMethod === ORDER_TYPE.DELIVERY} onChange={handleChange} />
                        <label htmlFor="delivery">Delivery to my place</label><br />
                    </div>
                    <div className={CartFormCSS.form__radio}>
                        <input type="radio" name='deliveryMethod' id='takeaway' value='takeaway' checked={values.deliveryMethod === ORDER_TYPE.TAKEOUT} onChange={handleChange} />
                        <label htmlFor="takeaway">Grab from nearest restaurant</label>
                    </div>
                    {errors.deliveryMethod && touched.deliveryMethod && <p className={CartFormCSS.error_message}>{errors.deliveryMethod}</p>}
                </div>
                <div className={CartFormCSS.delivery__icon}>
                    <img src={deliveryIcon} alt="delivery icon" width={30} height={30} />
                    <p>Your order will be {values.deliveryMethod === 'delivery' ? 'delivered in 30 minutes' : 'ready in 15 minutes'} </p>
                </div>
                <div className={CartFormCSS.order__info}>
                    <h3>delivery information</h3>
                    <label htmlFor="clientName">Name<sup style={{ color: 'red' }}>*</sup></label>
                    <input
                        type="text"
                        name='clientName'
                        id='clientName'
                        placeholder='e.g. John Doe'
                        value={values.clientName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.clientName && touched.clientName && CartFormCSS.invalidInput}
                    />
                    {errors.clientName && touched.clientName && <p className={CartFormCSS.error_message}>{errors.clientName}</p>}

                    <label htmlFor="phoneNumber">Phone Number<sup style={{ color: 'red' }}>*</sup></label>
                    <input
                        type="number"
                        name='phoneNumber'
                        inputMode="decimal"
                        id='phoneNumber'
                        placeholder='e.g. +1 (xxx) xxx-xxxx'
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phoneNumber && touched.phoneNumber && CartFormCSS.invalidInput}
                    />
                    {errors.phoneNumber && touched.phoneNumber && <p className={CartFormCSS.error_message}>{errors.phoneNumber}</p>}

                    <label htmlFor="personNum">How many person</label>
                    <input
                        type="number"
                        name='personNum'
                        id='personNum'
                        value={values.personNum}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.personNum && touched.personNum && CartFormCSS.invalidInput}
                    />
                    {errors.personNum && touched.personNum && <p className={CartFormCSS.error_message}>{errors.personNum}</p>}

                    {
                        values.deliveryMethod === 'delivery' ?
                            <>
                                <label htmlFor="address">Your Address</label>
                                <textarea
                                    name="address"
                                    id="address"
                                    cols="30"
                                    rows="5"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.address && touched.address && CartFormCSS.invalidInput}
                                />
                                {errors.address && touched.address && <p className={CartFormCSS.error_message}>{errors.address}</p>}
                            </>
                            :
                            <>
                                <label htmlFor="restaurant">Choose Restaurant</label>
                                <select
                                    name="restaurant"
                                    id="restaurant"
                                    value={values.restaurant}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.restaurant && touched.restaurant && CartFormCSS.invalidInput}
                                >
                                    <option value="not chossen">-- Chosse --</option>
                                    {renderRestaurantsList()}
                                </select>
                                {errors.restaurant && touched.restaurant && <p className={CartFormCSS.error_message}>{errors.restaurant}</p>}
                            </>
                    }

                    <label htmlFor="AddInfo">Additional information</label>
                    <textarea
                        name="AddInfo"
                        id="AddInfo"
                        cols="30"
                        rows="5"
                        value={values.AddInfo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.AddInfo && touched.AddInfo && CartFormCSS.invalidInput}
                    />
                    {errors.AddInfo && touched.AddInfo && <p className={CartFormCSS.error_message}>{errors.AddInfo}</p>}
                </div>
                <div className={CartFormCSS.order__payment}>
                    <h3>How do you want to pay?<sup style={{ color: 'red' }}>*</sup></h3>
                    <div className={CartFormCSS.form__radio}>
                        <input type="radio" id='cash' name='paymentMethod' value='cash' checked={values.paymentMethod === 'cash'} onChange={handleChange} />
                        <label htmlFor="cash">Cash</label><br />
                    </div>
                    <div className={CartFormCSS.form__radio}>
                        <input type="radio" id='card' name='paymentMethod' value='card' checked={values.paymentMethod === 'card'} onChange={handleChange} />
                        <label htmlFor="card"><img src={payWithCard} alt="pay with card" height={20} /></label>
                    </div>
                    {errors.paymentMethod && touched.paymentMethod && <p className={CartFormCSS.error_message}>{errors.paymentMethod}</p>}
                </div>
            </div>
            <div className={CartFormCSS.orderBox}>
                <p>Total: <strong>{totalPrice}</strong></p>
                <button className={`${CartFormCSS.btn} ${isValid ? CartFormCSS.btnVaild : CartFormCSS.disabledBtn}`} type='submit' disabled={!isValid}>go to Payment</button>
            </div>
        </form>

    );
};

export default CartForm;