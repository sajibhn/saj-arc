import React from 'react'
import TestimonialContent from './TestimonialContent'

const Testimonial = () => {
    return (
        <section className="section testimonial">
            <div className="testimonial__container container">
                <h3 className='testimonial__subtitle'>Our testimonial</h3>
                <h2 className='testimonial__title'>Talent wins games, but testimonialwork and intelligence win championships.</h2>
                <TestimonialContent />
            </div>
        </section>
    )
}

export default Testimonial