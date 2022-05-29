import React from 'react'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Video from './components/video/Video'

const Home = () => {
    return (
        <section className="home">
            <div className="home__container">
                <Hero />
                <Services />
                <Video />
            </div>
        </section>
    )
}

export default Home