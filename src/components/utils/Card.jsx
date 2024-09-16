import { Link } from 'react-router-dom';
import Button from './Button';
import React from 'react'
import { motion } from 'framer-motion';

const  Card = ({img,head,sum}) => {
  return (

    <div className=' overflow-hidden'>
    <motion.div 
    initial={{y:90 , opacity: 0}}
    whileInView={{y:0 , opacity: 1}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    
    className="max-w-sm mx-auto rounded-lg border h-auto shadow sm:min-h-[63vh] overflow-hidden ">
    <Link href="#" className='h-1/2 overflow-hidden'>
        <img className="rounded-t-lg object-cover  " src={img} alt="image" loading='lazy'/>
    </Link>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head}</h5>
        </a>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{sum}</p>
        <Button text={"Enquiry Now"} link="/contact" />
    </div>
</motion.div>
</div>
  )
}

export default Card

