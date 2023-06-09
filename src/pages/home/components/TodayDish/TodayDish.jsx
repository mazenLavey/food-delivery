import React, { useContext } from "react";
import { MenuDataContext } from 'context/MenuDataContext';
import TodayDishCSS from './TodayDish.module.css';
import ProductCard from 'components/productCard/ProductCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import useMedia from "hooks/useMedia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';


const TodayDish = () => {
    const { cartItems, dataIsLoaded } = useContext(MenuDataContext);
    const { isMobile } = useMedia();

    const elements = cartItems.map(el => el.discount ? <SwiperSlide key={el.id}><ProductCard data={el} showParagraph={false} SkeletonImgHeight={'210px'} /></SwiperSlide> : null)
    return (
        <>
            <section className="container">
                <div className="section__title">
                    <h2>Today's dishes</h2>
                </div>
                {
                    dataIsLoaded ?
                        <div className={TodayDishCSS.wrapper}>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1.4}
                                navigation={isMobile ? false : true}
                                modules={[Navigation]}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2.5
                                    },
                                    992: {
                                        slidesPerView: 3.4
                                    }
                                }}
                            >
                                {elements}
                            </Swiper>
                        </div>
                        :
                        <div className={TodayDishCSS.loading__div}>
                            <LoadingSpan />
                        </div>
                }
            </section>
        </>
    );
};

export default TodayDish;