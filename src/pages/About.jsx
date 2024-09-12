import React from 'react'
import Button from '../components/utils/Button'
import Gallery from '../components/utils/Gallery'
const About = () => {
  document.title='LE | About'
  return (
    <div className='w-full'>
        <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.5),rgba(0,0,0,.7)), url("/images/accelator.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh', // Full viewport height
          width: '100%' // Full width
        }}
        className='w-full  text-white flex justify-center items-center'
        >

          <h1 className='text-[4vw] font-bold border-t-4 border-b-4  py-8 px-6'>About <span className='text-highlight'> US</span></h1>

        </section>
{/* Overview */}
        <section className='overview max-w-screen-xl mx-auto mt-6'>
          <h1 className='text-highlight text-[3vw] font-bold'>Overview</h1>
          <p className='text-[1.6vw]'>
          LICON ELEVATORS was established in the year 1990 and is one of the fastest growing companies having in-house R&D and manufacturing facilities.
          </p>
        </section>

{/* Who are we */}
        <section className='who max-w-screen-xl mx-auto mt-6'>
          <h1 className='text-highlight text-[3vw] font-bold'>Who We Are?</h1>
          <div className='who-content flex flex-col gap-3 '>
          <p className='text-[1.2vw]'>
          La Grazia, as a knowledge-based company is active in the field of the escalator, moving walk, and elevator. The goal of establishing this company was improving and upgrading the escalator industry to move towards a modern future.
          </p>

          <p className='text-[1.2vw]'>
            Our team consists of experienced professionals with a passion for technology, design, and engineering. Our goal is to create a high-quality, efficient, and user-friendly product that will significantly contribute to the overall sustainability and convenience of our customers.
          </p>


          <p className='text-[1.2vw]'>
          La Grazia team is constantly trying to identify the market needs to produce products that meet the discerning customers’ expectations. This company helps the architectural masterpieces glow more than ever with reliance on its expertise, knowledge, and ingenuity.
          </p>

          <p className='text-[1.2vw]'>
            La Grazia team is constantly trying to identify the market needs to produce products that meet the discerning customers’ expectations. This company helps the architectural masterpieces glow more than ever with reliance on its expertise, knowledge, and ingenuity.</p>

          <p className='text-[1.2vw] '>
            For more information about our team, please contact us at <a href='mailto:info@licon-elevators.com' className='text-highlight'>info@licon-elevators.com</a>.
          </p>
          </div>
        </section>

        <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.3)), url("/images/down.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh', // Full viewport height
          width: '100%' // Full width
        }}
        className='w-full mt-8  text-white flex justify-center items-center'
        >

        

        </section>


        <section className='text-center flex flex-col gap-12 mt-8'>
            <div className='vision'>
                  <h1 className='font-black text-[3vw]'>Our <span className='text-highlight'>Vision</span></h1>
                  <p className='text-[1.1vw]'>We give people freedom to connect and thrive in a taller, faster, smarter world.</p>
            </div>


            <div className='mission'>
                  <h1 className='font-black text-[3vw]'>Our <span className='text-highlight'>Mission</span></h1>
                  <p className='text-[1.1vw]'> To be a world-class, customer-centric, service-oriented company.</p>
            </div>


            <div className='values'>
                  <h1 className='font-black text-[3vw]'>Our <span className='text-highlight'>Values</span></h1>
                  <p className='text-[1.1vw]' >We put people at the center of everything we do.</p>
                  <p className='text-[1.1vw]' >We are reliable, smart and focused on the future.</p>
                  <p className='text-[1.1vw]' >We are creating a more personal, connected world.</p>
                  <p className='text-[1.1vw]' >We roll up our sleeves to get it done.</p>
            </div>
        </section>

        <section className='mt-10 ' >
        <Gallery 
        flex="flex-row" 
        heading="We created an industry and changed the world" 
        sum="Otis is an iconic brand with a rich history. Few companies can claim a greater role in creating our connected urban world. We've helped build cities, transformed how people live and work and revolutionized architecture itself."
        img="https://omuscmslfrpcdn03.azureedge.net/documents/256045/3900859/Otis.com_history_box_callout_image_OurCompany.jpg/94f59ca8-5ae1-64ba-c227-ced5075e1344?t=1643718548324"
        />

<Gallery 
        flex="flex-row-reverse" 
        heading="We created an industry and changed the world" 
        sum="Otis is an iconic brand with a rich history. Few companies can claim a greater role in creating our connected urban world. We've helped build cities, transformed how people live and work and revolutionized architecture itself."
        img="https://omuscmslfrpcdn03.azureedge.net/documents/256045/3900859/Otis.com_history_box_callout_image_OurCompany.jpg/94f59ca8-5ae1-64ba-c227-ced5075e1344?t=1643718548324"
        />
         <Gallery 
        flex="flex-row" 
        heading="We created an industry and changed the world" 
        sum="Otis is an iconic brand with a rich history. Few companies can claim a greater role in creating our connected urban world. We've helped build cities, transformed how people live and work and revolutionized architecture itself."
        img="https://omuscmslfrpcdn03.azureedge.net/documents/256045/3900859/Otis.com_history_box_callout_image_OurCompany.jpg/94f59ca8-5ae1-64ba-c227-ced5075e1344?t=1643718548324"
        />
         <Gallery 
        flex="flex-row-reverse" 
        heading="We created an industry and changed the world" 
        sum="Otis is an iconic brand with a rich history. Few companies can claim a greater role in creating our connected urban world. We've helped build cities, transformed how people live and work and revolutionized architecture itself."
        img="https://omuscmslfrpcdn03.azureedge.net/documents/256045/3900859/Otis.com_history_box_callout_image_OurCompany.jpg/94f59ca8-5ae1-64ba-c227-ced5075e1344?t=1643718548324"
        />
        

        </section>



       
    </div>
  )
}

export default About
