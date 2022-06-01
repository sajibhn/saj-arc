import React, { useState } from 'react'
import { architectureData } from '../../../../data/architectureData'

const AllProjects = () => {
    const [datas, setDatas] = useState(architectureData)
    return (
        <section className="section all__projects">
            <div className="all__projects__container container">
                <h2 className="all__projects__title">
                    all projects
                </h2>
                <div className="all__projects__content grid">
                    {datas.map((data) => {
                        const { id, image, title, category } = data
                        return (
                            <div className="all__projects__content__data project__data" key={id}>
                                <img src={image} alt="" />
                                <div className="all__projects__content__data__body project__data__body">
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

export default AllProjects