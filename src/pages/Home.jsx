import React from 'react'
import Carasoule from '../components/utils/Carasoule'
import Button from '../components/utils/Button'
import Gallery from '../components/utils/Gallery'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import Work from '../components/Work'
import MarqueElem from '../components/utils/MarqueElem'
import Review from '../components/utils/Review'


const Home = () => {
    
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
     document.title='Licon Elevator'


  return (
    <>  
    
     

    <section className="mt-12 sm:mt-0 relative w-full sm:h-screen h-80 aspect-auto">
  {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full sm:h-full object-cover"
        >
          <source src="/videos/Liconelevator.mp4" type="video/mp4" />
          {/* Fallback content if video is not supported */}
          Your browser does not support the video tag.
        </video>

  {/* Black Transparent Gradient */}
        <div className="absolute top-0 left-0 w-full sm:h-full bg-gradient-to-b from-black/60 to-black/60"></div>

        {/* Content */}
        <div className='absolute  w-[80%] sm:w-1/2  sm:top-[10%] sm:left-[10%] sm:-translate-x-0 sm:-translate-y-0 mt-36 sm:mt-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-4 border-b-4 sm:px-10 px-2 border-white text-white text-[3.6vw] sm:text-[2.6vw] font-black sm:py-28 py-4'> 
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
</section>

   
    <section 
   
    className='max-w-screen-xl mx-auto min-h-screen flex sm:flex-row flex-col items-center sm:justify-between '>

{/* map */}
<motion.div
        initial={{ x: isMobile ? "-10%" : "-80%", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, }}
        className='map sm:w-1/2 mt-6 sm:mt-0'
      >
    <img src="/images/india.svg" alt="" className='sm:p-20 px-4' />
</motion.div>

{/* content */}
<motion.div
        initial={{ x: isMobile ? "10%" : "50%", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true,  }}
        className='content-box sm:w-1/2 px-3 sm:px-0'
      >
                <div className='content flex flex-col gap-4 mb-6'>

              
            <h1 className='sm:text-[2vw] text-[3vh] leading-none  font-bold text-highlight'>We are the India's leading company for elevator and escalator manufacturing, installation and service</h1>
            <p className='sm:text-[1.4vw] text-[2vh] '>We move 30 million people a day and we maintain ~1 million customer units worldwide - the world's largest portfolio. We can be found in many of the world's most recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.</p>
            </div>

            <Button text="Our Company" link="/about" />

        </motion.div>
    </section>

{     /* Our Clients */}


<section className='mt-8 px-3 pb-20 sm:px-0 max-w-screen-xl mx-auto'>
<h1 className='sm:text-[4vw] text-[4vh]  font-bold  py-4 mb-6  sm:py-8 px-6 overflow-hidden'>
            
            <motion.span
             initial={{rotate:90 , y:"40%" ,opacity:0}}
             whileInView={{rotate:0, y:0 ,opacity:1}}
             viewport={{once:true}}
             transition={{ duration:0.6 }}
             className='inline-block origin-left '
            > Our  <span className='text-highlight' > Clients </span></motion.span>
             
             </h1>

          <MarqueElem/>
           
  
  </section>



{/* our Projects */}


    <section className=' mt-8 px-3 sm:px-0 max-w-screen-xl mx-auto'>
    <h1 className='sm:text-[4vw] text-[4vh]  font-bold  py-4 mb-6  sm:py-8 px-6 overflow-hidden'>
            
            <motion.span
             initial={{rotate:90 , y:"40%" ,opacity:0}}
             whileInView={{rotate:0, y:0 ,opacity:1}}
             viewport={{once:true}}
             transition={{ duration:0.6 }}
             className='inline-block origin-left '
            > Our  <span className='text-highlight' > Projects </span></motion.span>
             
             </h1>

<motion.div
        initial={{x: isMobile?100 :1000, opacity: 0}} 
        whileInView={{x: 0, opacity: 1}}
        transition={{duration:0.9}}
        viewport={{once:true}}
        
        >
        <Gallery 
        flex="flex-row" 
        heading="We created an industry and changed the world" 
        sum="Otis is an iconic brand with a rich history. Few companies can claim a greater role in creating our connected urban world. We've helped build cities, transformed how people live and work and revolutionized architecture itself."
        img="https://omuscmslfrpcdn03.azureedge.net/documents/256045/3900859/Otis.com_history_box_callout_image_OurCompany.jpg/94f59ca8-5ae1-64ba-c227-ced5075e1344?t=1643718548324"
        />
</motion.div>

<motion.div
        initial={{x: isMobile?-100 : -1000, opacity: 0}} 
        whileInView={{x: 0, opacity: 1}}
        transition={{duration:0.9}}
        viewport={{once:true}}
        
        >
        <Gallery 
        flex="flex-row-reverse" 
        heading="We created an industry and changed the world" 
        sum="Otis is an iconic brand with a rich history. Few companies can claim a greater role in creating our connected urban world. We've helped build cities, transformed how people live and work and revolutionized architecture itself."
        img="https://omuscmslfrpcdn03.azureedge.net/documents/256045/3900859/Otis.com_history_box_callout_image_OurCompany.jpg/94f59ca8-5ae1-64ba-c227-ced5075e1344?t=1643718548324"
        />

</motion.div>
        
    </section>



    {/* Our Gallery */}

        <section className='max-w-screen-xl mx-auto mt-8'>

        <h1 className='sm:text-[4vw] text-[4vh]  font-bold  py-4  sm:py-8 px-6 overflow-hidden'>
            
            <motion.span
             initial={{rotate:90 , y:"40%" ,opacity:0}}
             whileInView={{rotate:0, y:0 ,opacity:1}}
             viewport={{once:true}}
             transition={{ duration:0.6 }}
             className='inline-block origin-left '
            > Our  <span className='text-highlight' > Gallery </span></motion.span>
             
             </h1>


<Work/>
        </section>

{/* testimonail */}
    <section className="max-w-screen-xl mx-auto mt-8 px-3 sm:px-0">
      <h1 className="sm:text-[4vw] text-[4vh] font-bold py-4 sm:py-8 px-6 overflow-hidden">
        <motion.span
          initial={{ rotate: 90, y: "40%", opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block origin-left"
        >
          Our <span className="text-highlight">Testimonials</span>
        </motion.span>
      </h1>

    <Review/>
    </section>

    </>

  )
}

export default Home
