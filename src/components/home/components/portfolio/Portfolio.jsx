import React, { useState } from 'react'
import { architectureData } from '../../../../data/architectureData'

const Portfolio = () => {
    const [datas, setDatas] = useState(architectureData)
    return (
        <section class="portfolio" id="portfolio">
            <div class="portfolio__container grid">

                {
                    datas.slice(0, 6).map((data) => {
                        const { id, category, title, image } = data
                        return (
                            <div class="portfolio__data" key={id}>
                                <img src={image} alt="" />
                                <div class="portfolio__overlay">
                                    <h4>{title}</h4>
                                    <p>{category}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio