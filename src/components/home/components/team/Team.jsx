import React from 'react'
import TeamMembers from './TeamMembers'

const Team = () => {
    return (
        <section className="section team">
            <div className="team__container container">
                <h3 className='team__subtitle'>Our Team</h3>
                <h2 className='team__title'>Talent wins games, but teamwork and intelligence win championships.</h2>
                <TeamMembers />
            </div>
        </section>
    )
}

export default Team