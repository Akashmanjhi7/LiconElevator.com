import React from 'react'
import Carasoule from '../components/utils/Carasoule'


const Home = () => {
  return (
    <>   <Carasoule/>
    <section className='max-w-screen-xl mx-auto min-h-screen'>

{/* map */}
        <div className='map text-pink-300'>
            <img src="/images/india.svg" alt="" />
        </div>
{/* content */}
        <div className='content'>
            <h1>We are the world’s leading company for elevator and escalator manufacturing, installation and service</h1>
            <p>We move 2.3 billion people a day and we maintain ~2.3 million customer units worldwide - the world’s largest portfolio. We can be found in many of the world’s most recognizable buildings as well as the busiest transportation hubs and retail centers. We are everywhere people are on the move.</p>

            
        </div>
    </section>
    </>

  )
}

export default Home
