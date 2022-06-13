import React, { useState } from 'react'
import SectionHero from '../reusable/SectionHero'
import { teamData } from '../../data/teamData'
import TeamCard from '../home/components/team/TeamCard'

const About = () => {
    const [datas, setDatas] = useState(teamData)
    return (
        <>
            <SectionHero quote="know us" title="about us" image="./images/about/about-bg.webp" />
            <section className="section team">
                <div className="team__container container">
                    <h3 className='team__subtitle'>Our Team</h3>
                    <h2 className='team__title'>Talent wins games, but teamwork and intelligence win championships.</h2>
                    <div className="team__content grid">

                        {datas.map((data) => {
                            const { id, image, name, role, facebook, linkedin, pinterest, twitter } = data
                            return (
                                <TeamCard key={id} image={image} name={name} role={role} facebook={facebook} linkedin={linkedin} pinterest={pinterest} twitter={twitter} />
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default About