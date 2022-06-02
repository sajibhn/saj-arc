import React from 'react'
import Team from '../home/components/team/Team'
import TeamMembers from '../home/components/team/TeamMembers'
import Hero from './components/Hero/Hero'

const About = () => {
    return (
        <>
            <Hero />
            <Team />
            <section className="container">
                <TeamMembers />
            </section>
        </>
    )
}

export default About