import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

const FooterRight = () => {
    return (
        <div className="footer__right">
            <h3>GET IN TOUCH</h3>
            <p>
                +(88) 826-512 <br />
                hello@email.com <br />
                2937 Elmwood Avenue,Scottsdale,Arizona,85251
            </p>
            <div className="footer__right__social">
                <a href="/">
                    <FaFacebookF />
                </a>
                <a href="/">
                    <FaLinkedinIn />
                </a>
                <a href="/">
                    <FaPinterestP />
                </a>
                <a href="/">
                    <FaTwitter />
                </a>
            </div>
        </div>
    )
}

export default FooterRight