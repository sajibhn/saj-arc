import React, { useState } from 'react'
import { featuredData } from '../../../data/featuredData'

const FeaturedProject = () => {
    const [datas, setDatas] = useState(featuredData)
    return (
        <section className="section featured__projects">
            <div className="featured__projects__container container">
                <h2 className="featured__projects__title">
                    featured
                </h2>
                <div className="featured__projects__content grid">
                    {datas.map((data) => {
                        const { id, image, title, category } = data
                        return (
                            <div className="featured__projects__content__data project__data" key={id}>
                                <img src={image} alt="" />
                                <div className="featured__projects__content__data__body project__data__body">
                                    <h3>{title}</h3>
                                    <p>{category}</p>
                                    <a href="/">view project</a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default FeaturedProject