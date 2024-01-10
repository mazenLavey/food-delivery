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
import routes from 'routes';

const App = () => {

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ScrollToTop />
            <Header />
            <BreadCrumbs />
            <Routes>
                <Route path='*' element={<Navigate to={routes.home} />} />
                <Route excat path={routes.home} element={<Home />} />
                <Route excat path={routes.cart} element={<CartLayout />}>
                    <Route path={routes.cart} element={<OrderPreview />} />
                    <Route path={routes.orderConfirmation} element={<OrderConfirmation />} />
                    <Route path={routes.checkout} element={<Checkout />} />
                </Route>
                <Route excat path={routes.about} element={<About />} />
                <Route excat path={routes.menu} element={<Menu />} />
                <Route excat path={routes.contact} element={<Contact />} />
                <Route excat path={routes.help} element={<Help />} />
                <Route excat path={routes.faq} element={<FAQs />} />
                <Route excat path={routes.privacyPolicy} element={<PrivacyPolicy />} />
                <Route excat path={routes.terms} element={<Terms />} />
            </Routes>
            <ToUpBtn />
            <Footer />
            <AlertBox />
        </div>
    );
};

export default App