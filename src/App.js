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
          <Route path='/featured/:id' element={<SinglePost />} />
          <Route path='/projects/:id' element={<SinglePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App