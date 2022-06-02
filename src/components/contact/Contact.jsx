import React from 'react'
import SectionHero from '../reusable/SectionHero'
import ContactContainer from './components/ContactContainer'

const Contact = () => {
    return (
        <>
            <SectionHero quote="hear from us" title="contact us" image="./images/contact/contact-bg.jpg" />
            <ContactContainer />
        </>

    )
}

export default Contact