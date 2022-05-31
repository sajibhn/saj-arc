import React, { useState } from 'react'
import { servicesData } from '../../../../data/servicesData'

const ServiceCategory = () => {
    const [datas, setDatas] = useState(servicesData);
    return (
        <div className="services__category">
            {
                datas.map((data) => {
                    const { id, image, quote, title, description } = data
                    return (
                        <div className="services__category__data" key={id}>
                            <img src={image} alt="" />
                            <span>{quote}</span>
                            <h3>{title}</h3>
                            <p>
                                {description}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServiceCategory