import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import SpecialitiesCSS from "./Specialities.module.css";
import SpecialityCard from 'components/specialityCard/SpecialityCard';
import SectionHeader from 'components/sectionHeader/SectionHeader';
import useMedia from 'hooks/useMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import routes from 'routes';

const Specialities = () => {
    const { specialities } = useContext(GlobalContext)
    const { isMobile } = useMedia();

    const element = specialities.map((el, index) => {
        if (isMobile) {
            return <SwiperSlide key={index}><SpecialityCard title={el.title} img={el.img} category={el.category} /></SwiperSlide>;
        }
        
        return <SpecialityCard key={index} title={el.title} img={el.img} category={el.category} />;
    });

    return (
        <section className={`${SpecialitiesCSS.section} container`} id="specialities">
            <SectionHeader text={"Specialities"} button={true} buttonLink={routes.menu} buttonText="Show All" buttonType="gray" />
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
    );
}

export default Specialities;