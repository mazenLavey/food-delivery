import React, {useState} from 'react';
import CartFormCSS from './CartForm.module.css';
import deliveryIcon from '../../assets/time-eat-icon.svg'
import priceFormatter from '../../functions/priceFormatter';
import useFetch from '../../hooks/useFetch';
import payWithCard from '../../assets/pay-with-card-icons.png';

const CartForm = (props)=>{
    const [orderForm, setOrderForm] = useState({
        deliveryMethod: 'delivery',
        clientName: '',
        phoneNumber: '',
        personNum: '',
        address: '',
        restaurant: '',
        AddInfo: '',
        paymentMethod:''
    });
    const [invalid, setInvalid] = useState(false);
    const {readyData, dataIsLoaded} = useFetch("restaurants");


    function handelForm(e) {
        const {name, value} = e.target;
        setOrderForm(oldValue => {
            return (
                {
                    ...oldValue,
                    [name]: value
                }
            );
        });
    };

    function renderRestaurantsList() {
        if(dataIsLoaded) {
            const selectElement = readyData.map(el => <option key={el.id} value={el.name}>{el.name}</option>);
            return selectElement;
        };
    };

    function handelSubmit(e) {
        e.preventDefault();
        // send data to server
        if(orderForm.deliveryMethod === 'delivery') {
            if (orderForm.clientName && orderForm.phoneNumber && orderForm.address && orderForm.paymentMethod ) {
                props.orderStatus();
                setOrderForm({
                    deliveryMethod: 'delivery',
                    clientName: '',
                    phoneNumber: '',
                    personNum: '',
                    address: '',
                    restaurant: '',
                    AddInfo: '',
                    paymentMethod:''
                });
                setInvalid(false);
            } else {
                setInvalid(true);
                return
            }
        } else {
            if (orderForm.clientName && orderForm.phoneNumber && orderForm.restaurant && orderForm.paymentMethod ) {
                props.orderStatus();
                setOrderForm({
                    deliveryMethod: 'delivery',
                    clientName: '',
                    phoneNumber: '',
                    personNum: '',
                    address: '',
                    restaurant: '',
                    AddInfo: '',
                    paymentMethod:''
                });
                setInvalid(false);
            } else {
                setInvalid(true);
                return
            }
        }
    }

    return (
        <>
        <form className={CartFormCSS.form} onSubmit={handelSubmit}>
            <div className={CartFormCSS.order__type}>
                <h3>How do you want to recive your order?<sup style={{color: 'red'}}>*</sup></h3>
                <div className={CartFormCSS.form__radio}>
                    <input type="radio" name='deliveryMethod' id='delivery' value='delivery' checked={orderForm.deliveryMethod === 'delivery'} onChange={handelForm} required/>
                    <label htmlFor="delivery">Delivery to my place</label><br/>
                </div>
                <div className={CartFormCSS.form__radio}>
                    <input type="radio" name='deliveryMethod' id='takeaway' value='takeaway' checked={orderForm.deliveryMethod === 'takeaway'} onChange={handelForm} required/>
                    <label htmlFor="takeaway">Grab from nearest restaurant</label>
                </div>
            </div>

            <div className={CartFormCSS.delivery__icon}>
                <img src={deliveryIcon} alt="delivery icon" width={48} height={48} />
                <p>Your order will be {orderForm.deliveryMethod === 'delivery'? 'delivered in 30 minutes' : 'ready in 15 minutes'} </p>
            </div>

            <div className={CartFormCSS.order__info}>
                <h3>delivery information</h3>
                <label htmlFor="clientName">Name<sup style={{color: 'red'}}>*</sup></label>
                <input type="text" name='clientName' id='clientName' placeholder='e.g. John Doe' value={orderForm.clientName} onChange={handelForm} minLength={3} maxLength={50} />

                <label htmlFor="phoneNumber">Phone Number<sup style={{color: 'red'}}>*</sup></label>
                <input type="number" name='phoneNumber' inputMode="decimal" id='phoneNumber' placeholder='e.g. +1 (xxx) xxx-xxxx' value={orderForm.phoneNumber}  onChange={handelForm} />

                <label htmlFor="personNum">How many person</label>
                <input type="number" name='personNum' id='personNum' value={orderForm.personNum} onChange={handelForm} style={{width: '20%'}}/>

                {
                    orderForm.deliveryMethod === 'delivery'?
                    <>
                        <label htmlFor="address">Your Address<sup style={{color: 'red'}}>*</sup></label>
                        <textarea name="address" id="address" cols="30" rows="5" value={orderForm.address} onChange={handelForm} minLength={10} maxLength={50} />
                    </>
                    :
                    <>
                        <label htmlFor="address">Choose Restaurant<sup style={{color: 'red'}}>*</sup></label>
                        <select name="restaurant" id="restaurant" onChange={handelForm}>
                            <option value="">-- Chosse --</option>
                            {renderRestaurantsList()}
                        </select>
                    </>
                }

                <label htmlFor="AddInfo">Additional information</label>
                <textarea name="AddInfo" id="AddInfo" cols="30" rows="5" value={orderForm.AddInfo} onChange={handelForm}/>
            </div>

            <div className={CartFormCSS.order__payment}>
                <h3>How do you want to pay?<sup style={{color: 'red'}}>*</sup></h3>
                <div className={CartFormCSS.form__radio}>
                    <input type="radio" id='cash' name='paymentMethod' value='cash' checked={orderForm.paymentMethod === 'cash'} onChange={handelForm} required/>
                    <label htmlFor="cash">Cash</label><br/>
                </div>
                <div className={CartFormCSS.form__radio}>
                    <input type="radio" id='card' name='paymentMethod' value='card' checked={orderForm.paymentMethod === 'card'} onChange={handelForm} required/>
                    <label htmlFor="card"><img src={payWithCard} alt="pay with card" height={20}/></label>
                </div>
            </div>
            {invalid? <p style={{color: 'red'}}>* Fill all required fields</p>: null}
            <div className={CartFormCSS.total}>
                <p>Total: <strong>{priceFormatter(props.getSumPrice)}</strong></p> 
                <button className={CartFormCSS.btn}>Submit Order</button>
            </div>
        </form>
        </>
    );
};

export default CartForm;