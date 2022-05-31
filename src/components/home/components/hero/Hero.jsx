import React, { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { featuredData } from '../../../../data/featuredData';

const Hero = () => {
    SwiperCore.use([Autoplay]);
    const [datas, setDatas] = useState(featuredData)
    return (
        <div className='hero'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    waitForTransition: true

                }}
            >
                {datas.map((data) => {
                    const { id, image, title, category, objective } = data;
                    return (
                        <SwiperSlide key={id}>
                            <div className="slider">
                                <div className="slider__img">
                                    <img src={image} alt="" className='slider__img-img' />
                                </div>
                                <div className="slider__body container">
                                    <h3>{category}</h3>
                                    <h1>{title}</h1>
                                    <p>
                                        {objective}
                                    </p>
                                    <a href="/" className="btn white">expore it</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
}

export default Hero