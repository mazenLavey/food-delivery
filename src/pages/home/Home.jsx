import React from "react";
import HomeNav from './components/HomeNav/HomeNav';
import Hero from './components/Hero/Hero';
import Restaurants from './components/Restaurants/Restaurants';
import NearRestaurant from './components/NearRestaurant/NearRestaurant';
import Specialities from './components/Specialities/Specialities';
import InfoBanner from './components/InfoBanner/InfoBanner';
import Gallery from './components/Gallery/Gallery';
import TodayDish from './components/TodayDish/TodayDish';

const Home = () => {
    return (
        <>
            <HomeNav />
            <Hero />
            <Restaurants />
            <NearRestaurant />
            <TodayDish />
            <Specialities />
            <InfoBanner />
            <Gallery />
        </>
    );
};

export default Home