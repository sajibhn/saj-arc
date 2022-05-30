import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

const FooterRight = () => {
    return (
        <div className="footer__right">
            <h3>GET IN TOUCH</h3>
            <p>
                +(01) 426-9824 <br />
                hello@email.com <br />
                1418 Luxe Steert, Suite 3845 California, USA
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