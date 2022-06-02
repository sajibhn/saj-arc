import React, { useState } from 'react'
import { teamData } from '../../../../data/teamData'
import TeamCard from './TeamCard'

const TeamMembers = () => {
    const [datas, setDatas] = useState(teamData)
    return (
        <div className="team__content grid">

            {datas.slice(0, 4).map((data) => {
                const { id, image, name, role, facebook, linkedin, pinterest, twitter } = data
                return (
                    <TeamCard key={id} image={image} name={name} role={role} facebook={facebook} linkedin={linkedin} pinterest={pinterest} twitter={twitter} />
                )
            })}

        </div>
    )
}

export default TeamMembers