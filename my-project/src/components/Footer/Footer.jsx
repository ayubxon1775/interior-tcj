import React from 'react'
import Logo from '../../assets/Logo.png'
import {FaPhone} from 'react-icons/fa'
import { LuMessageSquare } from "react-icons/lu";
import { delay, motion }  from 'framer-motion'
import { SlideLeft, SlideUp } from '../../animation/animation'

const Footer = () => {
  return (
    <motion.footer
    variants={SlideLeft(0.2)}
    initial='initial'
    whileInView='animate'
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className='space-y-4 font-semibold'>
          <div className='flex items-center space-x-3'>
            <img src={Logo} alt="" className='w-6'/>
            <p className='text-xl font-semibold'>Interior</p>
            </div>
            <p>Greater Noida Uttar Pradesh, india</p>
            <p>@ 2024 TCJ All rights reserved</p>
            </div>
          {/* Footer link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul  className='text-sm space-y-4'>
                <li><a href="#"></a>Our Story</li>
                <li><a href="#"></a>Designer</li>
                <li><a href="#"></a>Craftmanship</li>
                <li><a href="#"></a>Sustainability</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul  className='text-sm space-y-4'>
                <li><a href="#"></a>FAQ's </li>
                <li><a href="#"></a>Shipping & Returns</li>
                <li><a href="#"></a>Care Guide</li>
                <li><a href="#"></a>Guaranty</li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
              <h1 className="text-xl font-semibold">Contact us</h1>
              <ul className='text-base font-semibold space-y-4'>
                <li className='flex items-center space-x-3'><FaPhone/>
                  <a href="#"></a>+91 123456789
                </li>
                <li className='flex items-center space-x-3'><LuMessageSquare/>
                <a href="Contact.thecodingjourney@gmail.com">Email</a>
                  </li>
              </ul>
          </div>
        </div>
          {/* Bottom section */}
          <p className='text-center text-sm font-semibold border-t-2 pt-5 mt-5'>&copy; 2025 TCJ, All rights reserved</p>
      </div>
    </motion.footer>
  )
}

export default Footer