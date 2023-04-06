import React from "react";
import HomeNav from './HomeNav';
import Hero from './Hero';
import Restaurants from './Restaurants';
import NearRestaurant from './NearRestaurant';
import Specialities from './Specialities';
import InfoBanner from './InfoBanner';
import Gallery from './Gallery';
import TodayDish from './TodayDish';

const Home = ()=>{
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