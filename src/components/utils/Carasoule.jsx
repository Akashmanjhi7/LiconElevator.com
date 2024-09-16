import { Carousel } from 'flowbite-react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Carasoule = () => {
   
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration:1.2}}
    className="sm:h-[91vh]  w-full relative  text-white">
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
    <div className='absolute w-[80%] sm:w-1/2  sm:top-[10%] sm:left-[10%] sm:-translate-x-0 sm:-translate-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-4 border-b-4 sm:px-10 px-2 border-white text-[4.6vw] sm:text-[2.6vw] font-black sm:py-28 py-4'> 
      <h1 className='overflow-hidden'>
        <motion.span
        initial={{rotate:90 , y:"40%" ,opacity:0}}
        whileInView={{rotate:0, y:0 ,opacity:1}}
        viewport={{once:true}}
        transition={{ease:[0.22,1,0.36,1] , duration:1.3}}
        className='inline-block origin-left'
        >

        Welcome to <span className='text-highlight'> Licon Elevator</span>
        </motion.span>
        
        </h1>

      <h1 className='overflow-hidden'>
      <motion.span
        initial={{rotate:90 , y:"40%" ,opacity:0}}
        whileInView={{rotate:0, y:0 ,opacity:1}}
        viewport={{once:true}}
        transition={{ease:[0.22,1,0.36,1] , duration:1.3}}
        className='inline-block origin-left'
        >   
        We are Elevator manufacturer
        </motion.span>
        </h1>
      <h1 className='overflow-hidden'> 
      <motion.span
        initial={{rotate:90 , y:"40%" ,opacity:0}}
        whileInView={{rotate:0, y:0 ,opacity:1}}
        viewport={{once:true}}
        transition={{ease:[0.22,1,0.36,1] , duration:1.3}}
        className='inline-block origin-left'
        >   
        
        Design-Installation-Maintenance
        </motion.span>
        </h1>
      <h1 className='overflow-hidden'>
      <motion.span
        initial={{rotate:90 , y:"40%" ,opacity:0}}
        whileInView={{rotate:0, y:0 ,opacity:1}}
        viewport={{once:true}}
        transition={{ease:[0.22,1,0.36,1] , duration:1.3}}
        className='inline-block origin-left'
        >   
        With 24×7 Support
        </motion.span>
        </h1>
    </div>
  </motion.div>
  
  )
}

export default Carasoule
