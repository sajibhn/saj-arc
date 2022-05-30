import React from 'react'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Team from './components/team/Team'
import Video from './components/video/Video'

const Home = () => {
    return (
        <section className="home">
            <div className="home__container">
                <Hero />
                <Services />
                <Video />
                <Portfolio />
                <Team />
            </div>
        </section>
    )
}

export default Home