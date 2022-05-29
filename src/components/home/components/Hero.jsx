import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Hero = () => {
    return (
        <div className='hero'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="slider">
                        <div className="slider__img">
                            <img src="./images/home/slider-1.jpg" alt="" className='slider__img-img' />
                        </div>
                        <div className="slider__body container">
                            <h3>vorohta, ukraine</h3>
                            <h1>Awesome Design for the Vorokhta Hub</h1>
                            <p>
                                The main objective of the project – transformation of Vorokhta City in innovative
                                SMART CITY (village) and tourist center.
                            </p>
                            <a href="/" className="btn white">expore it</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider">
                        <div className="slider__img">
                            <img src="./images/home/slider-1.jpg" alt="" className='slider__img-img' />
                        </div>
                        <div className="slider__body container">
                            <h3>vorohta, ukraine</h3>
                            <h1>Awesome Design for the Vorokhta Hub</h1>
                            <p>
                                The main objective of the project – transformation of Vorokhta City in innovative
                                SMART CITY (village) and tourist center.
                            </p>
                            <a href="/" className="btn white">expore it</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider">
                        <div className="slider__img">
                            <img src="./images/home/slider-1.jpg" alt="" className='slider__img-img' />
                        </div>
                        <div className="slider__body container">
                            <h3>vorohta, ukraine</h3>
                            <h1>Awesome Design for the Vorokhta Hub</h1>
                            <p>
                                The main objective of the project – transformation of Vorokhta City in innovative
                                SMART CITY (village) and tourist center.
                            </p>
                            <a href="/" className="btn white">expore it</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Hero