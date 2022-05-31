import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { teamData } from '../../../../data/teamData'

const TeamMembers = () => {
    const [datas, setDatas] = useState(teamData)
    return (
        <div className="team__content grid">

            {datas.map((data) => {
                const { id, image, name, role, facebook, linkedin, pinterest, twitter } = data
                return (
                    <div className="team__data" key={id}>
                        <div className="team__data__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="team__data__body">
                            <h3>{name}</h3>
                            <span>{role}</span>
                            <div className="team__social">
                                <a href={facebook}>
                                    <FaFacebookF />
                                </a>
                                <a href={linkedin}>
                                    <FaLinkedinIn />
                                </a>
                                <a href={pinterest}>
                                    <FaPinterestP />
                                </a>
                                <a href={twitter}>
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default TeamMembers