import React, { useState } from 'react'

const Review = () => {
    const [review,setReview] = useState([
        {
            name:"John Doe",
            image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            review:"Licon Elevators provided exceptional service. Their elevators are smooth, reliable, and beautifully designed. I'm thoroughly impressed with their professionalism and attention to detail."
        },
        {
            name:"John Doe",
            image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            review:"Licon Elevators provided exceptional service. Their elevators are smooth, reliable, and beautifully designed. I'm thoroughly impressed with their professionalism and attention to detail."
        },
        {
            name:"John Doe",
            image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            review:"Licon Elevators provided exceptional service. Their elevators are smooth, reliable, and beautifully designed. I'm thoroughly impressed with their professionalism and attention to detail."
        } ,
        {
            name:"John Doe",
            image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            review:"Licon Elevators provided exceptional service. Their elevators are smooth, reliable, and beautifully designed. I'm thoroughly impressed with their professionalism and attention to detail."
        } ,
        {
            name:"John Doe",
            image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            review:"Licon Elevators provided exceptional service. Their elevators are smooth, reliable, and beautifully designed. I'm thoroughly impressed with their professionalism and attention to detail."
        } ,
        {
            name:"John Doe",
            image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            review:"Licon Elevators provided exceptional service. Their elevators are smooth, reliable, and beautifully designed. I'm thoroughly impressed with their professionalism and attention to detail."
        } ,
        
    ])
  return (
<>
<div className="flex flex-wrap gap-4">
{
    review.map((review)=>(
        <div className="sm:w-[32%] bg-zinc-200 shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-6">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={review.image}
                alt="Avatar"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">{review.name}</h2>
                <p className="text-gray-600">Satisfied Customer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              {review.review}
            </p>
          </div>
        </div>
    ))
}
      </div>
</>
  )
}

export default Review
