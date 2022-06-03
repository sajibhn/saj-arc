import React, { useState } from "react";
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { FaQuoteLeft } from "react-icons/fa";
import { testimonialData } from "../../../../data/testimonialData";

const TestimonialContent = () => {
    const [datas, setDatas] = useState(testimonialData);
    return (
        <div className="testimonial__content container">
            <Swiper
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                }}
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={50}
                // slidesPerView={2}
                pagination={{ clickable: true }}
            >
                {
                    datas.map((data) => {
                        const { id, image, name, position, message } = data;
                        return (
                            <SwiperSlide key={id}>
                                <div className="testimonial__data">
                                    <div className="testimonial__img">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="testimonial__body">
                                        <h3>{name}</h3>
                                        <span>{position}</span>
                                        <span className="quote">
                                            <FaQuoteLeft />
                                        </span>
                                        <p>
                                            {message}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default TestimonialContent;
