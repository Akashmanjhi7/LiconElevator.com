import React from 'react'
import Carasoule from '../components/utils/Carasoule'
import Button from '../components/utils/Button'



const Home = () => {
  return (
    <>   <Carasoule/>
    <section className='max-w-screen-xl mx-auto min-h-screen flex items-center justify-between '>

{/* map */}
        <div className='map text-pink-300 w-1/2'>
            <img src="/images/india.svg" alt="" className='p-20' />
        </div>
{/* content */}
        <div className='content-box w-1/2 '>
                <div className='content flex flex-col gap-4 mb-6'>

              
            <h1 className='text-[2vw] font-bold text-highlight'>We are the India's leading company for elevator and escalator manufacturing, installation and service</h1>
            <p className='text-[1.4vw]'>We move 30 million people a day and we maintain ~1 million customer units worldwide - the world's largest portfolio. We can be found in many of the world's most recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.</p>
            </div>

            <Button text="Our Company" link="/about" />

        </div>
    </section>
    </>

  )
}

export default Home
