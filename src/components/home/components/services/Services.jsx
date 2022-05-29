import React from 'react'
import ServiceCategory from './ServiceCategory'

const services = () => {
    return (
        <section className="services section">
            <div className="services__container container">
                <h3 className='services__subtitle'>Our Capabilities</h3>
                <h2 className='services__title'>Unique solutions for your home through a personalized process.</h2>
                <p className="services__about">
                    Nibh praesent tristique magna sit amet purus gravida quis blandit. Eget sit amet tellus cras
                    adipiscing enim eu. Sit amet nisl purus in mollis nunc. Praesent semper feugiat nibh sed pulvinar
                    proin gravida. Ut etiam sit amet nisl purus in mollis nunc sed. Vulputate enim nulla aliquet porttitor
                    lacus luctus accumsan tortor. Enim sit amet venenatis urna. Mauris nunc congue nisi vitae suscipit
                    tellus mauris a. Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                </p>

                <ServiceCategory />
            </div>
        </section>
    )
}

export default services