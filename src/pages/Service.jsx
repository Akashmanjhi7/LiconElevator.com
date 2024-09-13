import React, { useState } from 'react'
import Card from '../components/utils/Card'
import Aspect from '../components/utils/Aspect'

const Service = () => {
   document.title='LE | Service'

const [data, setData] = useState([
  {
    "id": 1,
    "heading": "Elevator Installation",
    "image": "/service/install.jpg",
    "summary": "Professional elevator installation services for residential and commercial buildings."
  },
  {
    "id": 2,
    "heading": "Elevator Maintenance",
    "image": "/service/ElevatorMaintenance.jpeg",
    "summary": "Comprehensive maintenance plans to keep your elevators running smoothly and efficiently."
  },
  {
    "id": 3,
    "heading": "Elevator Modernization",
    "image": "/service/Elevator-Modernization.jpeg",
    "summary": "Upgrade your existing elevators with the latest technology to improve performance and safety."
  },
  {
    "id": 4,
    "heading": "Emergency Repair Services",
    "image": "/service/Emergency-Repair-Services.jpeg",
    "summary": "24/7 emergency repair services to quickly fix any elevator breakdowns and minimize downtime."
  },
  {
    "id": 5,
    "heading": "Elevator Inspection",
    "image": "/service/Elevator-Inspection.jpeg",
    "summary": "Regular inspections to ensure compliance with safety standards and prevent potential issues."
  },
  {
    "id": 6,
    "heading": "Custom Elevator Solutions",
    "image": "/service/Elevator-Solutions.jpeg",
    "summary": "Tailored elevator solutions to meet unique building requirements and design preferences."
  }
]
)

const [elevators, setelevators] = useState(
  [
    {
      "type": "Passenger Elevators",
      "description": "We have substantial experience in elevator world & IOT's support, including Passenger elevator for different building types. Be it residential or commercial property passenger elevators are customized with various elevator shaft sizes.",
      "image": "/service/persnol.jpeg"
    },
    {
      "type": "Home Elevators",
      "description": "Our elevators are fully customizable according to your requirements and can be easily fitted even in narrow shaft spaces to make movement across floors within your home a breeze.",
      "image": "/service/home.jpeg"
    },
    {
      "type": "Goods Elevators",
      "description": "Specially designed for various industrial applications, these lifts are renowned for optimum performance and minimal maintenance. Liftshaft as well as for voluminous material, fitted with shutters for safety.",
      "image": "/service/goods.jpg"
    },
    {
      "type": "Observation Elevators",
      "description": "The harmony of advanced technology, unique design & sophisticated atmosphere. Observation elevator enriches the moving experience with speimagecular views & a comfortable ambience.",
      "image": "/service/observation.jpg"
    },
    {
      "type": "Automobile Elevators",
      "description": "Automobile elevators are widely being utilized by Architects and Developers to create flexible and luxurious parking designs. It is designed to facilitate ease of maintenance, cost effective.",
      "image": "/service/auto.jpg"
    },
    {
      "type": "Stretcher Elevators",
      "description": "Specifically designed for healthcare, retirement and spa facilities, Escon's Cura bed elevator is reliable, durable and attractive. It’s also spacious enough to hold both patients and equipment.",
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
        className='w-full sm:h-[60vh] h-32  text-white flex justify-center items-center'
        >

          <h1 className='sm:text-[4vw] text-[4vh]  font-bold border-t-4 border-b-4 py-4  sm:py-8 px-6'>Our <span className='text-highlight'> Services</span></h1>

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
