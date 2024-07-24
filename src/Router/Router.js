import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import FirstComponent from '../ShareModules/Navbar/Navbar'
import Footer from '../ShareModules/Footer/Footer'
import About from '../components/About/About.jsx';
import Hero from '../components/Hero/hero.jsx';
import Education from '../components/Education/Education.jsx';
import Skill from '../components/Skills/Skills.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Certificate from '../components/Certificate/Certificate.jsx';

export default function Rout() {
  return (
    <>
      <Router>
        <FirstComponent/>
            <Routes>
              <Route path='/' element={<Hero/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/education' element={<Education/>}/>
              <Route path='/skill' element={<Skill/>}/>
              <Route path='/project' element={<Projects/>}/>
              <Route path='/certificate' element={<Certificate/>}/>
            </Routes>
        <Footer/>
      </Router>
    </>
  )
}
