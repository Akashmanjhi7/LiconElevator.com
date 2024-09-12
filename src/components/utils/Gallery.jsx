import React from 'react'

const Gallery = ({flex,heading ,sum,img}) => {
  return (
    <div>
       <section className='gallerycontent flex flex-col  max-w-screen-xl mx-auto '>
          <div className={`gallerybox flex ${flex}   justify-between w-full  overflow-hidden`}>
            <div className='pl-4 w-1/2 flex flex-col items-center justify-center leading-none gap-12 '>
              <h1 className='text-[3vw]'>{heading}</h1>
              <p className='text-[1.3vw] leading-normal'>{sum}</p>
            </div>
            <div className='image w-1/2'>
            <img src={img} alt="" />
            </div>
          </div>
          

        </section>
    </div>
  )
}

export default Gallery
