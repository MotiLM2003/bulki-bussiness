import React from 'react';

const Popup = ({ isOpen = false }) => {
  return isOpen ? (
    <div className='absolute top-0 left-0  w-screen h-screen z-[1000] '>
      <div className='absolute top-0 left-0 blur-xl bg-slate-500  h-[100%] w-screen opacity-50'></div>
      <div className='absolute top-[50%] left-[50%]'>Hello world</div>
    </div>
  ) : null;
};

export default Popup;
