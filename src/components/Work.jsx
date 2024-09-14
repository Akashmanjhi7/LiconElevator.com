import React from 'react';
import imageData from '../data/gallery.json'; 
import { motion } from 'framer-motion';

const Work = () => {
    
  return (
    <div className="wrapper">

      <motion.div 
          initial={{ 
            y: 50, 
            opacity:0
          }}
          whileInView={{ 
            y: 0,
            opacity:1
          }}
          transition={{ duration: 0.5 }}
      className="gallery">
        {imageData.map((item) => (
          <div key={item.id} className={`gallery__item gallery__item--${item.id}`}>
            <a href="#" className="gallery__link">
              <img src={item.src} alt={item.alt} className="gallery__image" />
              <div className="gallery__overlay">
                <span>{item.caption}</span>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
