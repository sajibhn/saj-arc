import React, { useState } from 'react'
import { architectureData } from '../../../../data/architectureData'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [datas, setDatas] = useState(architectureData)
    return (
        <section class="portfolio" id="portfolio">
            <div class="portfolio__container grid">

                {
                    datas.slice(0, 6).map((data, index) => {
                        const { id, category, title, image, type } = data
                        return (
                            <Link to={`/${type}/` + index} key={id}>
                                <div class="portfolio__data" >
                                    <img src={image} alt="" />
                                    <div class="portfolio__overlay">
                                        <h4>{title}</h4>
                                        <p>{category}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio