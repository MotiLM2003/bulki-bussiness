import React from 'react';

const LandingCard = ({ Icon, iconColor, title, children }) => {
  return (
    <div className='flex flex-col gap-2 w-[200px] height-[400px] shadow p-[.8rem] rounded'>
      <div>{<Icon fill={iconColor} />}</div>
      <div>
        <h3 className=' text-blue-800 font-bold text-[.9rem] '>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LandingCard;
