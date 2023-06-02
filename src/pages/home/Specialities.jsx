import useFetch from '../../hooks/useFetch';
import SpecialitiesCSS from "./Specialities.module.css";
import SpecialityCard from '../../components/SpecialityCard';
import SectionHeader from '../../components/SectionHeader';
import useMedia from '../../hooks/useMedia';
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Specialities() {
    const { readyData } = useFetch('specialities')
    const { isMobile } = useMedia();

    const element = readyData.map(el => {
        if (isMobile) {
            return <SwiperSlide key={nanoid()}><SpecialityCard title={el.title} img={el.img} category={el.category} /></SwiperSlide>;
        } else {
            return <SpecialityCard key={nanoid()} title={el.title} img={el.img} category={el.category} />;
        }
    });

    return (
        <>
            <section className={`${SpecialitiesCSS.section} container`} id="specialities">
                <SectionHeader text={"Specialities"} button={true} buttonLink="/menu" buttonText="Show All" buttonType="gray" />
                {
                    isMobile ?
                        <div className={SpecialitiesCSS.list__mobile}>
                            <Swiper
                                slidesPerView={1.6}
                                spaceBetween={30}
                                breakpoints={{
                                    360: {
                                        slidesPerView: 2.8
                                    },
                                    520: {
                                        slidesPerView: 4.4
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