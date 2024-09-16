import React, { useState } from 'react'
import Card from '../components/utils/Card'
import Aspect from '../components/utils/Aspect'
import { motion } from 'framer-motion'

const Service = () => {
   document.title='LE | Service'

const [data, setData] = useState([
  {
    "id": 1,
    "heading": "Elevator Installation",
    "image": "/service/install.jpg",
    "summary": "Professional elevator installation ensuring safety, efficiency, and modern design solutions."
  },
  {
    "id": 2,
    "heading": "Elevator Maintenance",
    "image": "/service/ElevatorMaintenance.jpeg",
    "summary": "Our expert elevator maintenance ensures smooth, safe operation with minimal downtime."
  },
  {
    "id": 3,
    "heading": "Elevator Modernization",
    "image": "/service/Elevator-Modernization.jpeg",
    "summary": "Modernize your elevators for better efficiency and reliability with our professional services."
  },
  {
    "id": 4,
    "heading": "Emergency Repair Services",
    "image": "/service/Emergency-Repair-Services.jpeg",
    "summary": "Fast, expert elevator repairs available 24/7 to ensure safety and minimize downtime."
  },
  {
    "id": 5,
    "heading": "Elevator Inspection",
    "image": "/service/Elevator-Inspection.jpeg",
    "summary": "Thorough elevator inspections for safety, reliability, and optimal performance assurance."
  },
  {
    "id": 6,
    "heading": "Custom Elevator Solutions",
    "image": "/service/Elevator-Solutions.jpeg",
    "summary": "Elevator solutions that prioritize customer needs, safety, and modern trends."
  }
]
)

const [elevators, setelevators] = useState(
  [
    {
      "type": "Passenger Elevators",
      "description": "Elevate your journey with our smooth, reliable passenger elevators—comfort, safety, and efficiency in every ride.",
      "image": "/service/persnol.jpeg"
    },
    {
      "type": "Home Elevators",
      "description": "Elevate your home with style and convenience. Our sleek, reliable home elevators add luxury and ease to any space.",
      "image": "/service/home.jpeg"
    },
    {
      "type": "Goods Elevators",
      "description": "Efficiently move heavy items with our reliable goods elevator—designed for durability, safety, and smooth operation.",
      "image": "/service/goods.jpg"
    },
    {
      "type": "Observation Elevators",
      "description": "Observation elevators offer stunning panoramic views from high vantage points, enhancing your experience with breathtaking landscapes and cityscapes as you ascend.",
      "image": "/service/observation.jpg"
    },
    {
      "type": "Automobile Elevators",
      "description": "Revolutionize your parking experience with automobile elevators, which offer smooth and quick transportation of vehicles between floors in high-density areas.",
      "image": "/service/auto.jpg"
    },
    {
      "type": "Stretcher Elevators",
      "description": "Stretcher elevators are designed for easy transport of patients in medical facilities, ensuring smooth, safe, and efficient movement between floors for critical care needs.",
      "image": "/service/strech.jpg"
    },
    
  ]
)

  return (
    <div>
       <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.5),rgba(0,0,0,.7)), url("/service/mechanic.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='w-full sm:h-[60vh] h-32  text-white mt-12 sm:mt-1  flex justify-center items-center'
        >

          <h1 className='sm:text-[4vw] text-[4vh]  font-bold border-t-4 border-b-4 py-4  sm:py-8 px-6 overflow-hidden'>
          <motion.span
          initial={{rotate:90 , y:"40%" ,opacity:0}}
          whileInView={{rotate:0, y:0 ,opacity:1}}
          viewport={{once:true}}
          transition={{ duration:1 }}
          className='inline-block origin-left '
           > 
             Our <span className='text-highlight' > Services</span></motion.span>
            
        
            
            </h1>

        </section>


      <section className= 'mt-5 flex flex-col sm:flex-row flex-wrap max-w-screen-xl mx-auto gap-8'>
      {data.map((item,id)=>(

      <Card key={id} img={item.image} head={item.heading} sum={item.summary} />
      ))}
      </section>


      <section className='max-w-screen-xl mx-auto mt-10 '>
      <h1 className='text-wrap text-center sm:text-[2vw] italic'>The major aspects before delivering <span className='text-highlight'> LICON elevators</span> are:</h1>

        <Aspect/>
      </section>


      <section className= 'mt-5 mb-10 flex flex-col sm:flex-row flex-wrap max-w-screen-xl mx-auto gap-8'>
      {elevators.map((item,id)=>(

      <Card key={id} img={item.image} head={item.type} sum={item.description} />
      ))}
      </section>
    </div>
  )
}

export default Service
