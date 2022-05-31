import React from 'react'
import Completed from './completed/Completed'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Team from './components/team/Team'
import Testimonial from './components/testimonial/Testimonial'
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
                <Completed />
                <Testimonial />
            </div>
        </section>
    )
}

export default Home