import React, { useState } from 'react'
import NavMenu from './NavMenu'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigation = useNavigate();
    return (
        <header className='header'>
            <nav className={`${menuOpen ? 'nav active' : "nav"}`}>
                <div className="nav__logo" onClick={() => { navigation("/") }}>
                    <img src="./images/logo-white.png" alt="" className="nav__logo-img" />
                </div>

                <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>

            </nav>
        </header>
    )
}

export default Header