import React, { useContext, useEffect } from 'react';
import { MenuContext } from 'context/MenuContext';
import MenuFilterCSS from './MenuFilter.module.css';
import CategoryBtn from './CategoryBtn';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MenuFilter = () => {
    const { changeMenuFilter, isLoading, filterMenu, dishesCategories } = useContext(MenuContext);

    function ChangeCategory(e) {
        let changeTo = e.target.dataset.category;
        changeMenuFilter(changeTo);
    };

    useEffect(()=>{
        changeMenuFilter('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const categoriesElements = dishesCategories.map((el, index) => {
        return (
            <SwiperSlide key={index} >
                <CategoryBtn name={el} ChangeCategory={ChangeCategory} />
            </SwiperSlide>
        );
    });

    return (
        <div className={MenuFilterCSS.categories}>
            <div className={MenuFilterCSS.slider}>
                {
                    isLoading ?
                        <Skeleton count={0.9} height={35} />
                        :
                        <Swiper
                            slidesPerView={2.5}
                            spaceBetween={10}
                            breakpoints={{
                                360: {
                                    slidesPerView: 3.5
                                },
                                576: {
                                    slidesPerView: 4.5
                                },
                                768: {
                                    slidesPerView: 5.5
                                },
                                992: {
                                    slidesPerView: 6.5
                                },
                                1400: {
                                    slidesPerView: 10.5
                                }
                            }}
                        >
                            <SwiperSlide>
                                <span className={filterMenu === 'all' || filterMenu === '' ? 'active' : null} data-category="all" onClick={ChangeCategory} >all</span>
                            </SwiperSlide>
                            {categoriesElements}
                        </Swiper>
                }
            </div>
        </div>
    )
};

export default MenuFilter;