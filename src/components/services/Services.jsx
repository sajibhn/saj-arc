import React from 'react'
import SectionHero from '../reusable/SectionHero'
import ServiceAbout from './components/service about/ServiceAbout'
import ServiceContent from './components/servicecontent/ServiceContent'

const Services = () => {
    return (
        <>
            <SectionHero quote="we propose" title="best services " image='./images/services/service-hero-bg.jpg' />
            <ServiceAbout />
            <ServiceContent />
        </>
    )
}

export default Services