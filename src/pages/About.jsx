import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Gallery from '../components/utils/Gallery'
import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll';
const About = () => {
  document.title='LE | About'
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className='w-full mt-12 '>
        <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.5),rgba(0,0,0,.7)), url("/images/accelator.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='w-full sm:h-[60vh] h-32  text-white flex justify-center items-center'
        >

          <h1 className='sm:text-[4vw] text-[4vh]  font-bold border-t-4 border-b-4 py-4  sm:py-8 px-6 overflow-hidden'>
            
           <motion.sapn
            initial={{rotate:90 , y:"40%" ,opacity:0}}
            whileInView={{rotate:0, y:0 ,opacity:1}}
            viewport={{once:true}}
            transition={{ duration:1 }}
            className='inline-block origin-left '
           > About <span className='text-highlight' > US</span></motion.sapn>
            
            </h1>

        </section>
{/* Overview */}
        <section className='overview max-w-screen-xl mx-auto mt-6 px-3 sm:px-0'>
        <h1 className='text-highlight sm:text-[3vw] text-[3vh] font-bold  overflow-hidden'>
          
  <motion.span
    initial={{ x: 70, opacity: 0 }}
    whileInView={{ x: 0,  opacity: 1 }}
    viewport={{ once: true }}
    transition={{  duration: 1}}
    className='inline-block origin-left '
  
  >
    Overview
  </motion.span>
</h1>
          <p className='sm:text-[1.6vw] text-[1.4vh]'>
          Licon Elevators offers cutting-edge, reliable elevator solutions with sleek designs and advanced technology for modern buildings.
          </p>
        </section>

{/* Who are we */}
        <section className='who max-w-screen-xl mx-auto mt-8 px-3 sm:px-0'>
          <h1 className='text-highlight sm:text-[3vw] text-[3vh]  font-bold'>
          <motion.span
    initial={{ x: 70, opacity: 0 }}
    whileInView={{ x: 0,  opacity: 1 }}
    viewport={{ once: true }}
    transition={{  duration: 1}}
    className='inline-block origin-left '
  
  >
    Who We Are?
  </motion.span>
            </h1>
          <div className='who-content flex flex-col gap-3 '>
          <p className='sm:text-[1.3vw] text-[1.4vh]'>
          Elevate your expectations with Licon Elevators! We specialize in top-tier elevator solutions, offering expert installation, maintenance, and repair services for both residential and commercial properties.
          </p>

          <p className='sm:text-[1.3vw] text-[1.4vh]'>
            Our team consists of experienced professionals with a passion for technology, design, and engineering. Our goal is to create a high-quality, efficient, and user-friendly product that will significantly contribute to the overall sustainability and convenience of our customers.
          </p>


          <p className='sm:text-[1.3vw] text-[1.4vh]'>
          Our dedication to safety, efficiency, and innovative technology ensures smooth and reliable operations. From modern homes to bustling office buildings, trust Licon for exceptional performance, prompt service, and unmatched customer satisfaction. Discover the difference with Licon Elevators—where quality and reliability meet.
          </p>

        

          <p className='sm:text-[1.3vw] text-[1.4vh] '>
            For more information about our team, please contact us at <a href='mailto:info@licon-elevators.com' className='text-highlight'>liconelevator@gmail.com</a>.
          </p>
          </div>
        </section>

        <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.3)), url("/images/down.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='w-full sm:h-[60vh] h-32 mt-8  text-white flex justify-center items-center '

        data-scoll data-scroll-speed=".5"
        >
            <div className='quote sm:text-[3vw] text-[2.2vh] font-semibold'>
            <h1>With <span className='glow text-highlight'>Vision</span>, we see beyond boundaries. </h1>
            <h1>Through our <span className='text-highlight'>Mission</span>, we elevate every experience.</h1>
            <h1>Rooted in <span className='text-highlight'>Values</span>, we build the future one lift at a time.</h1>
            </div>
        </section>


        <section className='text-center flex flex-col gap-12 mt-8 px-3 sm:px-0'>
            <div className='vision'>
                  <h1 className='font-black sm:text-[3vw] text-[3vh] '>Our <span className='text-highlight'>Vision</span></h1>
                  <p className='sm:text-[1.2vw] text-[1.1vh]'>Innovating elevator systems for a safer, smoother, and more efficient ride.</p>
            </div>


            <div className='mission'>
                  <h1 className='font-black sm:text-[3vw] text-[3vh] '>Our <span className='text-highlight'>Mission</span></h1>
                  <p className='sm:text-[1.2vw] text-[1.1vh] '> Experience effortless vertical movement with Licon Elevators where technology meets reliability</p>
            </div>


            <div className='values'>
                  <h1 className='font-black sm:text-[3vw] text-[3vh] '>Our <span className='text-highlight'>Values</span></h1>
                  <p className='sm:text-[1.2vw] text-[1.1vh] italic ' >We put people at the center of everything we do.</p>
                  <p className='sm:text-[1.2vw] text-[1.1vh] italic ' >We are reliable, smart and focused on the future.</p>
                  <p className='sm:text-[1.2vw] text-[1.1vh] italic ' >We are creating a more personal, connected world.</p>
                  <p className='sm:text-[1.2vw] text-[1.1vh] italic ' >We roll up our sleeves to get it done.</p>

               <p className='sm:text-[1.2vw] text-[1.1vh] pt-4' >At Licon Elevators, our commitment to reliability and safety drives our innovative solutions, <br /> always ensuring a customer-focused approach to deliver unparalleled performance and peace of mind.</p> 
            </div>
        </section>

        <section className='gallery mt-8 px-3 sm:px-0'>
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
        initial={{x: isMobile?-100 :-1000, opacity: 0}} 
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



       
    </div>
  )
}

export default About
