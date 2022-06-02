import React from 'react'

const SectionHero = ({ quote, title, image }) => {
    return (
        <section className="section__hero">
            <div className="section__hero__img">
                <img src={image} alt="" />
            </div>
            <div className="section__hero__container container">
                <p>{quote}</p>
                <h2>{title}</h2>
            </div>
        </section>
    )
}

export default SectionHero