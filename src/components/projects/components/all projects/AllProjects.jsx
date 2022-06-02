import React, { useState } from 'react'
import { architectureData } from '../../../../data/architectureData'
import Button from '../../../reusable/Button'
import ProjectCard from '../../../reusable/ProjectCard'

const AllProjects = () => {
    const [datas, setDatas] = useState(architectureData)
    return (
        <section className="section all__projects">
            <div className="all__projects__container container">
                <Button text="all projects" />
                <div className="all__projects__content grid">
                    {datas.map((data) => {
                        const { id, image, title, category } = data
                        return (
                            <ProjectCard id={id} image={image} title={title} category={category} />
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default AllProjects