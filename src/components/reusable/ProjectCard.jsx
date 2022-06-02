import React from 'react'

const ProjectCard = ({ key, image, title, category }) => {
    return (
        <>
            <div className="featured__projects__content__data project__data" key={key}>
                <img src={image} alt="" />
                <div className="featured__projects__content__data__body project__data__body">
                    <h3>{title}</h3>
                    <p>{category}</p>
                    <a href="/">view project</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard