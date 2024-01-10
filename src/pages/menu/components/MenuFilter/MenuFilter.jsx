import { useSearchParams } from 'react-router-dom';
import CategoryBtn from './CategoryBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './MenuFilter.css';

const MenuFilter = ({ menuFilter, dishesCategories }) => {
    const [,setSearchParams] = useSearchParams();

    function ChangeCategory(e) {
        e.stopPropagation();
        const category = e.target.dataset.category;
        setSearchParams({ category });
    };

    const categoriesElements = dishesCategories.map((el, index) => {
        return (
            <SwiperSlide key={index} >
                <CategoryBtn name={el} ChangeCategory={ChangeCategory} menuFilter={menuFilter} />
            </SwiperSlide>
        );
    });

    return (
        <div className="MenuFilter__categories">
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                slideToClickedSlide={true}
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
                    <span className={menuFilter === 'all' || menuFilter === '' ? 'active' : null} data-category="all" onClick={ChangeCategory} >all</span>
                </SwiperSlide>
                {categoriesElements}
            </Swiper>
        </div>
    )
};

export default MenuFilter;