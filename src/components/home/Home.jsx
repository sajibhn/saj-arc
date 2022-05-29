import React from 'react'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'

const Home = () => {
    return (
        <section className="home">
            <div className="home__container">
                <Hero />
                <Services />
            </div>
        </section>
    )
}

export default Home