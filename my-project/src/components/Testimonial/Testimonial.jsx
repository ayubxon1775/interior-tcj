import React from 'react';
import testimonial1 from '../../assets/testimonial/1.png'
import testimonial2 from '../../assets/testimonial/2.png'
import testimonial3 from '../../assets/testimonial/3.png'
import { delay, motion } from 'framer-motion';
import { SlideLeft } from '../../animation/animation';
import { SlideUp } from '../../animation/animation';

const TestimonialData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Designer',
    img: testimonial1,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem saepe facere, nihil quae nostrum explicabo voluptatum harum quia reprehenderit.',
    delay: 0.2
  },
  {
    id: 2,
    name: 'Alex',
    img: testimonial2,
    designation: 'Developer',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem saepe facere, nihil quae nostrum explicabo voluptatum harum quia reprehenderit.',
    delay: 0.4
  },
  {
    id: 3,
    name: 'George',
    img: testimonial3,
    designation: 'Manager',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem saepe facere, nihil quae nostrum explicabo voluptatum harum quia reprehenderit.',
    delay: 0.6
  },
]

const Testimonial = () => {
  return (
    <>
    <div className=' py-14'>
      {/*Heading title*/}
    <div className='space-y-4 text-center max-w-[550px] mx-auto mb-8'>
        <motion.h1 
        variants={SlideUp(0.2)}
        initial='initial'
        whileInView={'animate'}
        className='text-4xl font-bold font-serif'>Words from our customers</motion.h1>
        <motion.p variants={SlideUp(0.4)}
        initial='initial'
        whileInView={'animate'}
        className='text-gray-500 text-sm max-w-[350px] mx-auto'>Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
    </div>
    {/* testimonial cards */}
     <div className='bg-black p-12'>
       <div className='container grid grid-cols-1 md:grid-cols-3 gap-6'>
        {TestimonialData.map((card) => {
          return(
            <motion.div
            variants= {SlideLeft(card.delay)}
            initial='initial'
            whileInView='animate'
             key={card.id} className='border-[1px] border-gray-500 p-5 text-white group hover:bg-white duration-300 group hover:text-black '>
              {/* Uppercase section */}
              <div className='  flex flex-row items-center gap-3'>
                <img src={card.img} alt="" className='w-[80px] rounded-full' />
                <div >
                <h1 className='text-sm font-bold group- hover:text-black duration-300'>{card.name}</h1>
                <p className='text-gray-400 text-xs group- hover:text-black duration-300'>{card.designation}</p>
                <div className='text-xs mt-2'>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              {/* Bottom section */}
              <div className='mt-5 border-t-2 border-gray-500/40 pt-5'>
                <p className='text-sm text-gray-300 group- hover:text-black duration-300'>{card.text}</p>
              </div>

              
            </motion.div>
          )
        })}
      </div></div>
    </div>
    </>
  )
}

export default Testimonial