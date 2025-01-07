import React from 'react';
import testimonial1 from '../../assets/testimonial/1.png'
import testimonial2 from '../../assets/testimonial/2.png'
import testimonial3 from '../../assets/testimonial/3.png'

const TestimonialData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Designer',
    img: testimonial1,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem saepe facere, nihil quae nostrum explicabo voluptatum harum quia reprehenderit.'
  },
  {
    id: 2,
    name: 'Alex',
    img: testimonial2,
    designation: 'Developer',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem saepe facere, nihil quae nostrum explicabo voluptatum harum quia reprehenderit.'
  },
  {
    id: 3,
    name: 'George',
    img: testimonial3,
    designation: 'Manager',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem saepe facere, nihil quae nostrum explicabo voluptatum harum quia reprehenderit.'
  },
]

const Testimonial = () => {
  return (
    <>
    <div className='container py-14'>
      {/*Heading title*/}
    <div className='space-y-4 text-center max-w-[550px] mx-auto mb-8'>
        <h1 className='text-4xl font-bold font-serif'>Words from our customers</h1>
        <p className='text-gray-500 text-sm max-w-[350px] mx-auto'>Bring your dream home to life with one-on-one design help & hand picked products</p>
    </div>
    {/* testimonial cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {TestimonialData.map((card) => {
          return(
            <div key={card.id}>
              {/* Uppercase section */}
              <div className='flex flex-row items-center gap-5'>
                <img src={card.img} alt="" className='w-[80px] rounded-full' />
                <div>
                <h1 className='text-sm font-bold'>{card.name}</h1>
                <p className='text-gray-500 text-xs'>{card.designation}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Testimonial