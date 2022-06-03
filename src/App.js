import React from 'react'
import './main.scss'
import Header from './components/global/header/Header'
import Home from './components/home/Home'
import Footer from './components/global/footer/Footer'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import About from './components/about/About'
import SingleProject from './components/global/single post/SingleProject'
import SingleFeature from './components/global/single post/SingleFeature'
import Contact from './components/contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/featured/:id' element={<SingleFeature />} />
          <Route path='/projects/:id' element={<SingleProject />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App