import React, { useState } from 'react'
import { featuredData } from '../../../../data/featuredData'
import Button from '../../../reusable/Button'
import ProjectCard from '../../../reusable/ProjectCard'

const FeaturedProject = () => {
    const [datas, setDatas] = useState(featuredData)
    return (
        <section className="section featured__projects">
            <div className="featured__projects__container container">
                <Button text="featured" />
                <div className="featured__projects__content grid">
                    {datas.map((data, index) => {
                        const { id, image, title, category, type } = data
                        return (
                            <ProjectCard type={type} index={index} key={id} image={image} title={title} category={category} />
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default FeaturedProject