import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Spacing from './Spacing';
export const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'src/assets/loading/loading1.png',
    'src/assets/loading/loading2.png',
    'src/assets/loading/loading3.png',
    'src/assets/loading/loading4.png',
    'src/assets/loading/loading5.png',
    'src/assets/loading/loading6.png',
    'src/assets/loading/loading7.png',
    'src/assets/loading/loading6.png',
    'src/assets/loading/loading5.png',
    'src/assets/loading/loading4.png',
    'src/assets/loading/loading3.png',
    'src/assets/loading/loading2.png',
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Spacing size={7} />
      <AnimatePresence>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          src={images[currentImageIndex]}
          alt="Loading"
          className="h-[100px] w-[100px]"
        />
      </AnimatePresence>
      <span className="text-base">로딩중..</span>
    </div>
  );
};

