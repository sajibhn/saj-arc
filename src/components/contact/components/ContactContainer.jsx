import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const ContactContainer = () => {
    return (
        <section className="section grid container" id="contact__container">
            <ContactLeft />
            <ContactRight />
        </section>
    )
}

export default ContactContainer