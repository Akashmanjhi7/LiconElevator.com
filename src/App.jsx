import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import About from './pages/About'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
        {/* Routes */}
<div className='h-[4vw]' ></div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

      {/* Footer */}

      <Footer/>


    </div>
  )
}

export default App
