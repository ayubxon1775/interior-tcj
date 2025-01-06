import React from 'react'
import HeroPng from '../../assets/hero.png'

const Hero = () => {
  return (
    <>
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[450px] gap-10">
        {/* Text section */}
        <div className='flex flex-col justify-center gap-5 md:pr-8 lg:pr-14 text-center md:text-left pt-20 md:pt-0 px-10 '>
          <h1 className='text-3xl font-bold'>SKETCH LUXURY INTERIOR DESIGN</h1>
        <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam dolore quas, necessitatibus obcaecati exercitationem quasi reprehenderit voluptate nam quibusdam?</p>
        <div className='space-x-4'>
        <button className='primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Get Started</button>
        <button className='primary-btn uppercase'>Contact Us</button>
        </div>
        </div>
        {/* Image section */}
        <div className='flex flex-col items-center justify-center'>
          <img src={HeroPng} alt="" className='w-[80%] md:w-[300px] object-cover md:scale-125' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero