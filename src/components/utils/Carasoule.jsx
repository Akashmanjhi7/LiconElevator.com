import { Carousel } from 'flowbite-react'
import React, { useState } from 'react'

const Carasoule = () => {
   
  return (
    <div className="sm:h-[91vh] w-full relative  text-white">
    <Carousel>
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1682432741354-548c3ba4ac31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1680593855869-97f446e17207?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1719463814218-52e17f720e8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>
      </div>
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1724634731504-001259c8ab2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1577887546572-144f62fceb9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>
      </div>
    </Carousel>
    <div className='absolute sm:top-[10%] sm:left-[10%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-4 border-b-4 sm:px-10 px-2 border-white text-[2.6vw] font-black sm:py-28 py-4'> 
      <h1>Welcome to <span className='text-highlight'> Licon Elevator</span></h1>
      <h1>We are Elevator manufacturer</h1>
      <h1> Design-Installation-Maintenance</h1>
      <h1>With 24×7 Support</h1>
    </div>
  </div>
  
  )
}

export default Carasoule
