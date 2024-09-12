import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text , link }) => {
  return (
    <Link 
    to={link}
    className='border-2 px-5 py-3 bg-highlight border-highlight font-semibold hover:bg-transparent duration-300 '>
      {text}
    </Link>
  )
}

export default Button
