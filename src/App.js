import React from 'react'
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Home from './pages/home/Home';
import OrderPreview from './pages/cart/OrderPreview';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Help from './pages/help/Help';
import Terms from './pages/help/Terms';
import FAQs from './pages/help/FAQs';
import PrivacyPolicy from './pages/help/PrivacyPolicy';
import { Routes, Route, Navigate } from 'react-router-dom';
import ToUpBtn from './components/ToUpBtn';
import ScrollToTop from './functions/ScrollToTop';
import AlertBox from './components/AlertBox';
import OrderConfirmation from './pages/cart/OrderConfirmation';
import Checkout from './pages/cart/Checkout';
import CartLayout from './pages/cart/CartLayout';
import BreadCrumbs from './components/BreadCrumbs';

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