import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProjectCard = ({ image, title, category, type, index }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="featured__projects__content__data project__data" >
                <img src={image} alt="" />
                <div className="featured__projects__content__data__body project__data__body">
                    <h3>{title}</h3>
                    <p>{category}</p>
                    <Link to={`/${type}/` + index}>view project</Link >
                </div>
            </div>
        </>
    )
}

export default ProjectCard