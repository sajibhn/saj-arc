import React from 'react'

const Hero = () => {
    return (
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
    )
}

export default Hero