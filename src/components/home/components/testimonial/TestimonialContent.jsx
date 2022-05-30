import React from "react";
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { FaQuoteLeft } from "react-icons/fa";

const TestimonialContent = () => {
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
                <SwiperSlide>

                    <div className="testimonial__data">
                        <div className="testimonial__img">
                            <img src="./images/home/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__body">
                            <h3>taylor roberts</h3>
                            <span>Co-manager associated</span>
                            <span className="quote">
                                <FaQuoteLeft />
                            </span>
                            <p>
                                typefaces and layouts, and in appearance of different general the
                                content of dummy text is nonsensical.typefaces of dummy text is
                                nonsensical.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="testimonial__data">
                        <div className="testimonial__img">
                            <img src="./images/home/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__body">
                            <h3>taylor roberts</h3>
                            <span>Co-manager associated</span>
                            <span className="quote">
                                <FaQuoteLeft />
                            </span>
                            <p>
                                typefaces and layouts, and in appearance of different general the
                                content of dummy text is nonsensical.typefaces of dummy text is
                                nonsensical.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="testimonial__data">
                        <div className="testimonial__img">
                            <img src="./images/home/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__body">
                            <h3>taylor roberts</h3>
                            <span>Co-manager associated</span>
                            <span className="quote">
                                <FaQuoteLeft />
                            </span>
                            <p>
                                typefaces and layouts, and in appearance of different general the
                                content of dummy text is nonsensical.typefaces of dummy text is
                                nonsensical.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="testimonial__data">
                        <div className="testimonial__img">
                            <img src="./images/home/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__body">
                            <h3>taylor roberts</h3>
                            <span>Co-manager associated</span>
                            <span className="quote">
                                <FaQuoteLeft />
                            </span>
                            <p>
                                typefaces and layouts, and in appearance of different general the
                                content of dummy text is nonsensical.typefaces of dummy text is
                                nonsensical.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="testimonial__data">
                        <div className="testimonial__img">
                            <img src="./images/home/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__body">
                            <h3>taylor roberts</h3>
                            <span>Co-manager associated</span>
                            <span className="quote">
                                <FaQuoteLeft />
                            </span>
                            <p>
                                typefaces and layouts, and in appearance of different general the
                                content of dummy text is nonsensical.typefaces of dummy text is
                                nonsensical.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="testimonial__data">
                        <div className="testimonial__img">
                            <img src="./images/home/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__body">
                            <h3>taylor roberts</h3>
                            <span>Co-manager associated</span>
                            <span className="quote">
                                <FaQuoteLeft />
                            </span>
                            <p>
                                typefaces and layouts, and in appearance of different general the
                                content of dummy text is nonsensical.typefaces of dummy text is
                                nonsensical.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TestimonialContent;
