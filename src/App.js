import React from 'react'
import './main.scss'
import Header from './components/global/header/Header'
import Home from './components/home/Home'
import Footer from './components/global/footer/Footer'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Projects /> */}
      <Services />
      <Footer />
    </>
  )
}

export default App