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

export default AllProjects