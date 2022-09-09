import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../../images/hero-1.PNG';
const RightComponent = () => {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ x: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: 0 }}
      className='flex flex-col items-center '
    >
      <img src={hero} alt='Hero' />
    </motion.div>
  );
};

export default RightComponent;
