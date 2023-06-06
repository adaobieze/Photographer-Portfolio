import React from 'react';

const Feedback = ({ text, author, photo }) => {
  return (
    <div className='flex justify-around items-center space-x-8 w[70%] p-20 mobile:p-10 mobile:space-y-4 mobile:w-full mobile:flex-col mobile:justify-center'>
      <div className='w-[50%] mobile:w-full content-center'>
        <img src={photo} alt="Feedback" className='w-[80%] mobile:w-full' />
      </div>
      <div className='w-[50%] mobile:w-full'>
        <p className='mobile:text-sm'>{text}</p>
        <p className='font-semibold'>- {author}</p>
      </div>
    </div>
  );
};

export default Feedback;
