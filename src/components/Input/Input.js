import React from 'react';

const Input = ({ extraClass = 'text-sm  text-gray-500', ...rest }) => {
  return (
    <input
      className={`outline-none border border-red-400 rounded  p-1 ${extraClass}`}
      {...rest}
    />
  );
};

export default Input;
