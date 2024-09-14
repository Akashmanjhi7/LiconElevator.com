import React from 'react'
import Marquee from 'react-fast-marquee'
import { useMediaQuery } from 'react-responsive';
const MarqueElem = () => {
    const marqueeIMg = [
        '/clients/LIC.png',
        '/clients/BHEL.png',
        '/clients/BSNL.png',
        '/clients/IAI.png',
        '/clients/JIO.png',
        '/clients/SpaceX.png',
        '/clients/TATA.png',
        '/clients/NASA.png',
      ]
      const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div  className='pt-10'>
       <Marquee 
       speed={75}
       pauseOnHover
       gradient={isMobile ? false : true}
       className=' '>
    {marqueeIMg.map((item, index) => (
      <img key={index} src={item} alt={`Client logo ${index}`} className=' sm:h-28 h-12 aspect-video sm:mx-8 mx-2 object-contain sm:object-scale-down  ' />
    ))}
  </Marquee>
    </div>
  )
}

export default MarqueElem
