// import React, { useContext } from 'react';
// import { nanoid } from 'nanoid';
// import { MenuDataContext } from '../../context/MenuDataContext';
// import CartItems from './CartItems';

// import CartForm from './CartForm';
// import sumTotal from '../../functions/sumTotal';
// import EmptyCart from './EmptyCart';
// import CartHeader from './CartHeader';
// import priceFormatter from '../../functions/priceFormatter';
// import { Link, NavLink } from "react-router-dom";
// import PrimaryBtn from '../../components/PrimaryBtn';
// import OrderPreview from './OrderPreview';

// const Cart = () => {
//     const { cartItems } = useContext(MenuDataContext);

//     const orderElements = cartItems.filter(el => {
//         return el.orders > 0;
//     });

//     const cartIsEmpty = orderElements.length > 0 ? false : true;

//     return (
//         <main>
//             {
//                 cartIsEmpty ?
//                     <EmptyCart />
//                     :
//                     <OrderPreview orderElements={orderElements} />
//             }
//         </main>
//     );
// };

// export default Cart;
