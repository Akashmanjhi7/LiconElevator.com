import React from 'react'
import Carasoule from '../components/utils/Carasoule'
import Button from '../components/utils/Button'
import Gallery from '../components/utils/Gallery'



const Home = () => {
     document.title='Licon Elevator'
  return (
    <>   <Carasoule/>
    <section className='max-w-screen-xl mx-auto min-h-screen flex sm:flex-row flex-col items-center sm:justify-between '>

{/* map */}
        <div className='map sm:w-1/2 mt-6 sm:mt-0 '>
            <img src="/images/india.svg" alt="" className='sm:p-20 px-4' />
        </div>
{/* content */}
        <div className='content-box sm:w-1/2  px-3 sm:px-0 '>
                <div className='content flex flex-col gap-4 mb-6'>

              
            <h1 className='sm:text-[2vw] text-[3vh] leading-none  font-bold text-highlight'>We are the India's leading company for elevator and escalator manufacturing, installation and service</h1>
            <p className='sm:text-[1.4vw] text-[2vh] '>We move 30 million people a day and we maintain ~1 million customer units worldwide - the world's largest portfolio. We can be found in many of the world's most recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.</p>
            </div>

            <Button text="Our Company" link="/about" />

        </div>
    </section>

    <section className='gallery mt-8 px-3 sm:px-0'>
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
    </>

  )
}

export default Home
