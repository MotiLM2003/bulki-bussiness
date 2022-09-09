import React from 'react';
import { motion } from 'framer-motion';
const LeftComponent = () => {
  return (
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: 0 }}
      className='flex flex-col items-center '
    >
      <div className='pt-5 max-w-[300px]'>
        <button className='bg-red-200 p-1 text-[.7em] min-w-[100px] rounded-xl '>
          <div className='flex items-center justify-center gap-2  text-red-600 '>
            <p>Sign up now!</p>
          </div>
        </button>
      </div>
      <div className='mt-2'>
        <h1 className=' text-blue-800 font-bold text-[1.5rem] text-center'>
          Our Digital Agency
          <br />
          Build Suberb Websitess <br />& Development
        </h1>
        <p className='text-xs text-gray-400 my-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
        </p>
        <div className='flex gap-3 items-center mt-5 justify-around'>
          <button className='bg-purple-600 p-1 text-[.8em] min-w-[100px] rounded-xl '>
            <div className='flex items-center justify-center gap-2  text-white'>
              <p>Learn more...</p>
            </div>
          </button>

          <button className='border border-gray-300 min-w-[100px] rounded flex items-center gap-2 p-1'>
            <i class='fa-solid fa-comments ' style={{ color: '#D3D3D3' }}></i>
            <p className='text-xs text-gray-500'>Chat now!</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftComponent;
