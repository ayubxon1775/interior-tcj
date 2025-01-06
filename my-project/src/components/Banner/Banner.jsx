import React from 'react';
import Banner1 from '../../assets/banner.png';

const Banner = () => {
  return (
    <>
    <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* image section */}
        <div className='flex flex-col justify-center items-center'>
          <img src={Banner1} alt="" className='w-[95%] md:w-full mx-auto'/>
        </div>
        {/* text section */}
        <div className='space-y-5 flex justify-center flex-col'>
          <h1 className='text-3xl font-bold '>We believe that a team makes any project better</h1>
          <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim veritatis quos dolor voluptates delectus adipisci odit repellendus ex eligendi.</p>
          <div>
          <button className='primary-btn'>Discover Now</button>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Banner