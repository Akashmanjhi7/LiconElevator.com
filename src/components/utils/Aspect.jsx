import { Award, HardHat, Headset, PencilRuler, ShieldCheck, Users } from 'lucide-react';
import React, { useState } from 'react';

const Aspect = () => {
  const [data, setData] = useState([
    {
      icon: PencilRuler,
      title: "Simple & Elegant Design",
      description:
        "Elevator design that enhances the overall look of your building while providing seamless functionality.",
    },
    {
      icon: Users,
      title: "User-friendly Controls",
      description:
        "We create controls by keeping in mind all ages as well as for special needs people.",
    },
    {
      icon: HardHat,
      title: "Safety-regulation",
      description:
        "Adhering to all guidelines and elevator safety regulations as prescribed by the governing authorities.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Guarantee",
      description:
        "Safety of your building's occupants is paramount. All of our products, ranging from the largest service elevators to the smallest freight elevators, are designed and verified by the governing authorities.",
    },
    {
      icon: Headset,
      title: "Our Support",
      description:
        "We offer the widest selection of products across multiple categories and provide swift and efficient delivery and installation across the country by means of our sophisticated distribution and logistics networks.",
    },
    {
      icon: Award,
      title: "Our Quality",
      description:
        "Our wide range of products includes high quality, non-proprietary, stylish elevator systems for low, mid, and high-rise buildings. All our elevator systems and technological solutions are designed with the highest norms and undergo rigorous testing before commissioning to market.",
    },
  ]);

  return (
    <div>
     
      <section className='flex flex-wrap w-full'>
        {data.map((item, index) => {
          const Icon = item.icon; // Dynamically get the icon component
          return (
            <div key={index} className='  w-full sm:mx-0 pt-10 flex flex-col gap-4 sm:w-1/3 px-4'>
              <Icon className='text-highlight sm:h-[2vw] scale-[2] mt-4 ml-4' /> {/* Render the icon */}
              <div>
              <h1 className='text-highlight font-black  text-[2.5vh] sm:text-[2vw]'>{item.title}</h1>
              <p className='text-[1.5vh] sm:text-[1.2vw]'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Aspect;
