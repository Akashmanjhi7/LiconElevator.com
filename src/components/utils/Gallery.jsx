import React from 'react'

const Gallery = ({flex,heading ,sum,img}) => {
  return (
    <div>

        {/* destop view */}
       <section className='gallerycontent hidden  sm:flex flex-col  max-w-screen-xl mx-auto '>
          <div className={`gallerybox flex ${flex}   justify-between w-full  overflow-hidden`}>
            <div className='pl-4 w-1/2 flex flex-col items-center justify-center leading-none gap-12 '>
              <h1 className='text-[3vw]'>{heading}</h1>
              <p className='text-[1.3vw]  leading-normal'>{sum}</p>
            </div>
            <div className='image w-1/2'>
            <img src={img} alt=""  className='object-cover' />
            </div>
          </div>
        </section>


        {/* mobile view */}
        <section className='gallerycontent sm:hidden  flex flex-col   max-w-screen-xl mx-auto mt-4'>
          <div className={`gallerybox flex flex-col-reverse   w-full  overflow-hidden gap-3`}>
            <div className=' flex flex-col gap-2 items-center justify-center leading-none  '>
              <h1 className='text-[3vh] '>{heading}</h1>
              <p className='text-[1.6vh] leading-normal'>{sum}</p>
            </div>
            <div className='image '>
            <img src={img} alt=""  className='object-cover' />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Gallery
