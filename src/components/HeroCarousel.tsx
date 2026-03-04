import React from 'react';
import { motion } from 'motion/react';

export const HeroCarousel: React.FC = () => {
  // We have 5 screenshots. To create an infinite loop without jumping,
  // we duplicate the array so it scrolls seamlessly.
  const images = [
    '/carousel-screenshots/1.png',
    '/carousel-screenshots/2.png',
    '/carousel-screenshots/3.png',
    '/carousel-screenshots/4.png',
    '/carousel-screenshots/5.png',
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="w-full mt-8 overflow-x-hidden overflow-y-visible relative carousel-container py-8"
    >
      {/* Left and Right fade masks to blend the edges into the background */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f4f5f4] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f4f5f4] to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-scroll w-[max-content] gap-8 pr-8">
        {duplicatedImages.map((src, index) => (
          <div 
            key={index} 
            className="w-[200px] md:w-[250px] shrink-0 transform transition-transform duration-500 hover:-translate-y-4"
          >
            <img 
              src={src} 
              alt={`App Mockup ${index + 1}`} 
              className="w-full h-auto rounded-[16px] md:rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
