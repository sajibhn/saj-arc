import React from 'react'

const ContactRight = () => {

    const handleform = (e) => {
        e.preventDefault();
        alert('the form is not dynamic');
    }
    return (
        <div className="contact__right">
            <form onSubmit={handleform}>
                <div className="contact__inputs">
                    <input type="text" className='contact__input' placeholder='Name' />
                    <input type="text" className='contact__input' placeholder='Phone' />
                </div>
                <input type="email" className='contact__input' placeholder='Email' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='contact__input'></textarea>
                <button type="submit" className='featured__projects__title'>Send</button>
            </form>
        </div>
    )
}

export default ContactRight