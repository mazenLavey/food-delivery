import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'layouts/header/Header';
import Footer from 'layouts/footer/Footer';
import Home from 'pages/home/Home';
import OrderPreview from 'pages/cart/components/OrderPreview/OrderPreview';
import About from 'pages/about/About';
import Menu from 'pages/menu/Menu';
import Contact from 'pages/contact/Contact';
import Help from 'pages/help/Help';
import Terms from 'pages/help/terms/Terms';
import FAQs from 'pages/help/FAQs/FAQs';
import PrivacyPolicy from 'pages/help/privacy-policy/PrivacyPolicy';
import ScrollToTop from 'utils/ScrollToTop';
import OrderConfirmation from 'pages/cart/order-confirmation/OrderConfirmation';
import Checkout from 'pages/cart/checkout/Checkout';
import CartLayout from 'pages/cart/Cart';
import ToUpBtn from 'components/toUpBtn/ToUpBtn';
import AlertBox from 'components/alertBox/AlertBox';
import BreadCrumbs from 'components/breadCrumbs/BreadCrumbs';

const App = () => {

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ScrollToTop />
            <Header />
            <BreadCrumbs />
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
                <Route excat path='/' element={<Home />} />
                <Route excat path='/cart' element={<CartLayout />}>
                    <Route path='/cart' element={<OrderPreview />} />
                    <Route path='/cart/order-confirmation' element={<OrderConfirmation />} />
                    <Route path='/cart/order-confirmation/checkout' element={<Checkout />} />
                </Route>
                <Route excat path='/about' element={<About />} />
                <Route excat path='/menu' element={<Menu />} />
                <Route excat path='/contact' element={<Contact />} />
                <Route excat path='/help' element={<Help />} />
                <Route excat path='/help/FAQs' element={<FAQs />} />
                <Route excat path='/help/privacy-policy' element={<PrivacyPolicy />} />
                <Route excat path='/help/terms' element={<Terms />} />
            </Routes>
            <ToUpBtn />
            <Footer />
            <AlertBox />
        </div>
    );
};

export default App