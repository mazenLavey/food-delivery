import React, { useContext } from "react";
import { MenuContext } from 'context/MenuContext';
import TodayDishCSS from './TodayDish.module.css';
import ProductCard from 'components/productCard/ProductCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import useMedia from "hooks/useMedia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';


const TodayDish = () => {
    const { menuItems, isLoading } = useContext(MenuContext);
    const { isMobile } = useMedia();

    const elements = menuItems?.filter(el => el?.discount).map(el => 
        <SwiperSlide key={el.id}>
            <ProductCard data={el} showParagraph={false} SkeletonImgHeight={'210px'} />
        </SwiperSlide> 
        );

    return (
        <>
            <section className="container">
                <div className="section__title">
                    <h2>Today's dishes</h2>
                </div>
                {
                    isLoading ?
                        <div className={TodayDishCSS.loading__div}>
                            <LoadingSpan />
                        </div>
                        :
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
                }
            </section>
        </>
    );
};

export default TodayDish;