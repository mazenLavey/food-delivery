import React, {useState} from "react";
import GalleryCSS from "./Gallery.module.css";
import insta01 from "../../assets/insta01.png";
import insta02 from "../../assets/insta02.png";
import insta03 from "../../assets/insta03.png";
import insta04 from "../../assets/insta04.png";
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PrimaryBtn from '../../components/PrimaryBtn';
import useMedia from '../../hooks/useMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Gallery() {
    const [isComplete, setIsComplete] = useState(false)
    const {isMobile} = useMedia();
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    function handelLoad(e) {
        if(e.target.complete) {
            setIsComplete(true)
        }
    }

    return (
        <section className={`${GalleryCSS.section} container`} id="gallery">
            <header className="section__title">
                    <h2>#YellowKitchens <span>in Instagram</span></h2>
                    <PrimaryBtn text='Visit' type='gray' link='https://www.instagram.com/' rel='noopener noreferrer' target='_blank'/>
            </header>
            {
                isMobile?
                <div className={GalleryCSS.photos__mobile} ref={ref}>
                    {
                        inView?
                        <Swiper slidesPerView={1.4} spaceBetween={20}>
                            <SwiperSlide>
                                <img src={insta03} alt="YellowKitchens" style={{width: '100%'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={insta02} alt="YellowKitchens" style={{width: '100%'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={insta04} alt="YellowKitchens" style={{width: '100%'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={insta01} alt="YellowKitchens" style={{width: '100%'}} />
                            </SwiperSlide>
                        </Swiper>
                        :
                        <>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        </>
                    }
                </div>
                :
                <div className={GalleryCSS.photos} ref={ref}>
                    {
                        inView?
                        <>
                        {
                            isComplete?
                            null
                            :
                            <>
                                <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                                <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                                <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                                <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                            </>
                        }
                        <>
                        <img src={insta01} alt="YellowKitchens" style={isComplete? {} : {display: 'none'}}/>
                        <img src={insta02} alt="YellowKitchens" style={isComplete? {} : {display: 'none'}}/>
                        <img src={insta03} alt="YellowKitchens" style={isComplete? {} : {display: 'none'}}/>
                        <img src={insta04} alt="YellowKitchens" onLoad={handelLoad} style={isComplete? {} : {display: 'none'}}/>
                        </>

                        </>
                        :
                        <>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        <Skeleton  height={'240px'} style={{display: 'flex'}}/>
                        </>
                    }
                </div>
            }
        </section>
    );
}

export default Gallery;