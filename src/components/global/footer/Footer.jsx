import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const Footer = () => {
    return (
        <footer className="section footer">
            <div className="footer__container container grid">
                <FooterLeft />
                <FooterRight />
            </div>
        </footer>
    )
}

export default Footer