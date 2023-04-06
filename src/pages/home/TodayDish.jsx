import React, {useContext} from "react";
import {MenuDataContext}  from '../../context/MenuDataContext';
import TodayDishCSS from './TodayDish.module.css';
import ProductCard from '../../components/ProductCard';
import LoadingSpan from '../../components/LoadingSpan';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';


const TodayDish = ()=>{
    const {cartItems, dataIsLoaded} = useContext(MenuDataContext);

    const elements = cartItems.map(el => el.discount? <SwiperSlide key={el.id}><ProductCard data={el} showParagraph={false} SkeletonImgHeight={'210px'}/></SwiperSlide>  : null)
    return (
        <>
            <section className="container">
                <div className="section__title">
                    <h2>Today's dishes</h2>
                </div>
                {
                    dataIsLoaded?
                    <div className={TodayDishCSS.wrapper}>
                        <Swiper 
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {elements}
                        </Swiper>
                    </div>
                    :
                    <LoadingSpan />
                }
            </section>
        </>
    );
};

export default TodayDish;