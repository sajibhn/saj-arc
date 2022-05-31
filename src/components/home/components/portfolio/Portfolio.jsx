import React, { useState } from 'react'
import { architectureData } from '../../../../data/architectureData'

const Portfolio = () => {
    const [datas, setDatas] = useState(architectureData)
    return (
        <section class="portfolio" id="portfolio">
            <div class="portfolio__container grid">

                {
                    datas.map((data) => {
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




                {/* <div class="portfolio__data">
                    <img src="./images/home/portfolio-1.jpg" alt="" />

                    <div class="portfolio__overlay">
                        <h4>project name</h4>
                        <p>web design</p>
                    </div>
                </div>
                <div class="portfolio__data">
                    <img src="./images/home/portfolio-2.jpg" alt="" />

                    <div class="portfolio__overlay">
                        <h4>project name</h4>
                        <p>web design</p>
                    </div>
                </div>
                <div class="portfolio__data">
                    <img src="./images/home/portfolio-3.jpg" alt="" />

                    <div class="portfolio__overlay">
                        <h4>project name</h4>
                        <p>web design</p>
                    </div>
                </div>
                <div class="portfolio__data">
                    <img src="./images/home/portfolio-4.jpg" alt="" />

                    <div class="portfolio__overlay">
                        <h4>project name</h4>
                        <p>web design</p>
                    </div>
                </div>
                <div class="portfolio__data">
                    <img src="./images/home/portfolio-5.jpg" alt="" />

                    <div class="portfolio__overlay">
                        <h4>project name</h4>
                        <p>web design</p>
                    </div>
                </div>
                <div class="portfolio__data">
                    <img src="./images/home/portfolio-6.jpg" alt="" />

                    <div class="portfolio__overlay">
                        <h4>project name</h4>
                        <p>web design</p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Portfolio