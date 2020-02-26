import React, { useState } from 'react';

export const ErrorList = ({ title, errors }) => {
  const [count, setCount] = useState(errors.length);
  console.log('here are errors', errors);
  return (
    <>
      <div>{title}</div>
      <div>count {errors.length}</div>
    </>
  );
};
