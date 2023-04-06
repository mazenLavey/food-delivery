import React from "react";
import useFetch from '../../hooks/useFetch';
import useMedia from '../../hooks/useMedia';
import RestaurantsCSS from "./Restaurants.module.css";
import RestaurantCard from '../../components/RestaurantCard';
import LoadingSpan from '../../components/LoadingSpan';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Restaurants() {
    const {readyData, dataIsLoaded} = useFetch("restaurants");
    const {isMobile} = useMedia();


    function renderList() {
        if (dataIsLoaded) {
            const elements = readyData.map(el => {
                if(isMobile) {
                    return (
                        <SwiperSlide key={el.id} className={RestaurantsCSS.card__mobile}>
                                <RestaurantCard item={el} />
                        </SwiperSlide>
                    )
                } else {
                    return (
                        <div className={RestaurantsCSS.card} key={el.id}>
                            <RestaurantCard item={el} />
                        </div>
                    )
                }
            });
            return elements
        };
    };

    return (
        <>
            <section className={`${RestaurantsCSS.section} container`} id="restaurants">
                <header className="section__title">
                    <h2>Restaurants</h2>
                    <PrimaryBtn link='/about' text='Show All' type='gray' />
                </header>
                    {dataIsLoaded? 
                    (isMobile?
                        <div className={RestaurantsCSS.list__mobile}>
                            <Swiper slidesPerView={1} spaceBetween={20} >
                                {renderList()}
                            </Swiper>
                        </div>
                        :
                        <div className={RestaurantsCSS.list}>
                            {renderList()}
                        </div>
                        )
                    : 
                    <LoadingSpan 
                    />}
            </section>
        </>
    );
}

export default Restaurants;