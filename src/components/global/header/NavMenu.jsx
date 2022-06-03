import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { navLinkData } from '../../../data/navLinkData'

const NavMenu = ({ menuOpen, setMenuOpen }) => {
    const [datas, setDatas] = useState(navLinkData);
    return (
        <div className="nav__menu">
            <ul className="nav__list">
                {
                    datas.map((data) => {
                        const { id, title, link } = data
                        return (
                            <li className="nav__item" key={id} onClick={() => setMenuOpen(!menuOpen)}>
                                <NavLink to={link} className="nav__link">{title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavMenu