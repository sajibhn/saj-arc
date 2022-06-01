import React, { useState } from "react";
import { servicesData } from '../../../../data/servicesData'

const ServiceContent = () => {
    const [datas, setDatas] = useState(servicesData)
    return (
        <section className="section" id="service-service-content">
            <div className="service__container container">
                <p>services</p>
                <h2>This is what we do</h2>
                <div className="service__content grid">
                    {datas.map((data) => {
                        const { id, image, title, description } = data;
                        return (
                            <div className="service__data" key={id}>
                                <img src={image} alt={title} />
                                <h3>{title}</h3>
                                <p>
                                    {description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceContent;
