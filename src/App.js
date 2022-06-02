import React from 'react'
import './main.scss'
import Header from './components/global/header/Header'
import Home from './components/home/Home'
import Footer from './components/global/footer/Footer'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import About from './components/about/About'
import SinglePost from './components/global/single post/SinglePost'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Projects /> */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <SinglePost /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App