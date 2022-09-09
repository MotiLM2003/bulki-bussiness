import React from 'react';
import { motion } from 'framer-motion';
import LandingCard from './LandingCard';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import Test1 from '../../../components/Icons/Test1';
import Test2 from '../../../components/Icons/Test2';
import Test3 from '../../../components/Icons/Test3';
import Test4 from '../../../components/Icons/Test4';
import Register from '../../../components/Icons/Register';
import Input from '../../../components/Input/Input';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, height: 0 }}
      style={{ overflow: 'hidden' }}
      className='pb-12 '
    >
      <div className='flex   flex-col md:flex-row  items-center justify-center w-screen mt-[6rem]'>
        <div className='w-[400px] mb-7 md:mb-0'>
          <LeftComponent />
        </div>
        <div className='basis-1/2 flex-shrink-0 max-w-[800px] min-w-[400px]'>
          <RightComponent />
        </div>
      </div>
      <div className='mt-[1rem] flex flex-col items-center gap-2 justify-center p-[2rem] '>
        <div className='flex flex-col items-center gap-4 shadow p-4 w-[60%] rounded'>
          <div className='flex items-center gap-4 text-red-400 text-xl font-bold'>
            <Register />
            <p>Register your business</p>
          </div>

          <div className='flex flex-col items-center gap-3'>
            <div className='flex flex-col md:flex-row  items-center gap-2  md:gap-[4rem]'>
              <div>
                <div className='text-xs text-gray-400'>Your name:</div>
                <div>
                  <Input />
                </div>
              </div>
              <div>
                <div className='text-xs text-gray-400'>Company name:</div>
                <div>
                  <Input />
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row  items-center gap-2  md:gap-[4rem]'>
              <div>
                <div className='text-xs text-gray-400'>Phone number:</div>
                <div>
                  <Input />
                </div>
              </div>
              <div>
                <div className='text-xs text-gray-400'>Email:</div>
                <div>
                  <Input />
                </div>
              </div>
            </div>
          </div>
          <textarea
            cols='4'
            rows='5'
            placeholder='Enter your business details here...'
            className='border border-red-400 rounded  w-[300px] md:w-[400px] outline-none p-2 text-sm text-gray-400 '
          ></textarea>
          <button className='bg-red-200 py-1 px-2 text-[.8em] min-w-[120px] rounded-xl cursor-pointer  hover:bg-red-500 transition duration-300 hover:shadow-lg '>
            <div className='flex items-center justify-center gap-2  text-red-700  hover:text-white'>
              <p>Register your Business</p>
            </div>
          </button>
        </div>
      </div>
      <div className='flex  flex-wrap	 mt-[2rem]  items-center justify-center w-screen gap-4'>
        <LandingCard Icon={Test1} title='Card Example #1' iconColor={'#4ea5d8'}>
          <p className='text-xs text-gray-400  leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
            <br />
            Lorem ipsum dolor sit amet.
            <br />
            amet consectetur adipisicing elit adipisicing.
          </p>
        </LandingCard>
        <LandingCard Icon={Test2} title='Card Example #2' iconColor={'#f48168'}>
          <p className='text-xs text-gray-400  leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
            <br />
            Lorem ipsum dolor sit amet.
            <br />
            amet consectetur adipisicing elit adipisicing.
          </p>
        </LandingCard>
        <LandingCard Icon={Test3} title='Card Example #3' iconColor={'#01cf3b'}>
          <p className='text-xs text-gray-400  leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
            <br />
            Lorem ipsum dolor sit amet.
            <br />
            amet consectetur adipisicing elit adipisicing.
          </p>
        </LandingCard>
        <LandingCard Icon={Test4} title='Card Example #4' iconColor={'#8664d7'}>
          <p className='text-xs text-gray-400  leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
            <br />
            Lorem ipsum dolor sit amet.
            <br />
            amet consectetur adipisicing elit adipisicing.
          </p>
        </LandingCard>
      </div>
    </motion.div>
  );
};

export default HomePage;
