import React, {useContext} from 'react';
import {nanoid} from 'nanoid'; 
import {MenuDataContext} from '../../context/MenuDataContext';
import MenuFilterCSS from './MenuFilter.module.css';
import CategoryBtn from './CategoryBtn';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MenuFilter= ()=>{
    const {cartItems, dataIsLoaded, useMenuFilter, filterItems} = useContext(MenuDataContext);

    function ChangeCategory(e) {
        let changeTo = e.target.dataset.category;   
        useMenuFilter(changeTo);
    };

    function findCategory() {
        let list = [];
        cartItems.map(el=> list.push(el.category));
        return Array.from(new Set(list))
    };

    // display items according to category filter
    const categoriesList = findCategory();
    const categoriesElements = categoriesList.map(el => {
        return <SwiperSlide key={nanoid()} ><CategoryBtn name={el}  ChangeCategory={ChangeCategory}/></SwiperSlide>
    });


    return (
        <div className={MenuFilterCSS.categories}>
            <div className={MenuFilterCSS.slider}>
                {
                    dataIsLoaded?
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
                            <span className={filterItems === 'all' || filterItems === '' ? 'active' : null} data-category="all"  onClick={ChangeCategory} >all</span>
                        </SwiperSlide>
                        {categoriesElements}
                    </Swiper>
                    :
                    <Skeleton count={0.9} height={35}/>
                }
            </div>
        </div>
    )
};

export default MenuFilter;