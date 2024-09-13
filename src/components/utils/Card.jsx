import { Link } from 'react-router-dom';
import Button from './Button';
import React from 'react'

const Card = ({img,head,sum}) => {
  return (
    <div class="max-w-sm mx-auto rounded-lg shadow ">
    <Link href="#">
        <img class="rounded-t-lg" src={img} alt="image" loading='lazy' className='object-contain  '/>
    </Link>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head}</h5>
        </a>
        <p class="mb-5 font-normal text-gray-700 dark:text-gray-400">{sum}</p>
        <Button text={"Enquiry Now"} link="/contact" />
    </div>
</div>
  )
}

export default Card

