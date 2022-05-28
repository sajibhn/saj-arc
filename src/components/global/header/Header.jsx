import React, { useState } from 'react'
import NavMenu from './NavMenu'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className='header'>
            <nav className={`${menuOpen ? 'nav active' : "nav"}`}>
                <div className="nav__logo">
                    <img src="./images/logo.png" alt="" className="nav__logo-img" />
                </div>

                <NavMenu />

                <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>

            </nav>
        </header>
    )
}

export default Header