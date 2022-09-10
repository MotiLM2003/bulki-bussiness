import React from 'react';

import img from '../../../images/dashboard.jpg';

const Service = () => {
  return (
    <div className='flex items-center justify-center min-h-[100vh]  '>
      <div className='flex flex-col justify-center items-center max-w-[300px] md:max-w-[550px]'>
        <h1 className='mb-6 font-bold text-3xl text-red-400 shadow border p-2 rounded-xl'>
          Services
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          repellat dolorem, odio molestias dicta aliquid optio repudiandae
          similique quod voluptate perspiciatis vitae quam ipsum mollitia
          nostrum ad in accusamus. Delectus?
        </p>
        <div>
          <img src={img} objectFit='contain' layout='fill' />
        </div>
      </div>
    </div>
  );
};

export default Service;
