import React from 'react'
import { architectureData } from '../../../data/architectureData';
import { useParams } from 'react-router-dom';
import SinglePost from './SinglePost';

const SingleProject = () => {
    const { id } = useParams();
    console.log(useParams.id)
    const project = architectureData[id]

    const { image, category, title, description, client, date, services } = project
    return (
        <SinglePost image={image} category={category} title={title}
            description={description} client={client} date={date} services={services} />
    )
}

export default SingleProject