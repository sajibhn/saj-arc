import React from 'react'
import { useParams } from 'react-router-dom';
import { featuredData } from '../../../data/featuredData';
import SinglePost from './SinglePost';

const SingleFeature = () => {

    const { id } = useParams();
    console.log(useParams.id)
    const project = featuredData[id]

    const { image, category, title, description, client, date, services } = project
    return (
        <SinglePost image={image} category={category} title={title}
            description={description} client={client} date={date} services={services} />
    )
}

export default SingleFeature