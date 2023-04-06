import useFetch from '../../hooks/useFetch';
import SpecialitiesCSS from "./Specialities.module.css";
import PrimaryBtn from '../../components/PrimaryBtn';
import SpecialityCard from '../../components/SpecialityCard';
import { nanoid } from "nanoid";
import useMedia from '../../hooks/useMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Specialities() {
    const {readyData} = useFetch('specialities')
    const {isMobile} = useMedia();


    const element = readyData.map(el => {
        if (isMobile){
            return <SwiperSlide key={nanoid()}><SpecialityCard title={el.title} img={el.img} category={el.category}/></SwiperSlide>;
        } else {
            return <SpecialityCard key={nanoid()} title={el.title} img={el.img} category={el.category}/>;
        }
    });

    return (
        <>
            <section className={`${SpecialitiesCSS.section} container`} id="specialities">
                <header className="section__title">
                    <h2>Specialities</h2>
                    <PrimaryBtn link='/menu' text='Show All' type='gray' />
                </header>
                {
                    isMobile?
                        <div className={SpecialitiesCSS.list__mobile}>
                        <Swiper 
                        slidesPerView={2} 
                        spaceBetween={30}
                        breakpoints={{
                            360: {
                                slidesPerView: 3
                            },
                            520: {
                                slidesPerView: 4
                            }
                        }}
                        >
                            {element}
                        </Swiper>
                        </div>
                    :
                        <div className={SpecialitiesCSS.list}>
                        {element}
                        </div>
                }
            </section>
        </>
    );
}

export default Specialities;