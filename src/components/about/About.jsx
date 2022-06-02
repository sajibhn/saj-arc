import React from 'react'
import Team from '../home/components/team/Team'
import TeamMembers from '../home/components/team/TeamMembers'
import SectionHero from '../reusable/SectionHero'

const About = () => {
    return (
        <>
            <SectionHero quote="know us" title="about us" image="./images/about/about-bg.jpg" />
            <Team />
            <section className="container">
                <TeamMembers />
            </section>
        </>
    )
}

export default About