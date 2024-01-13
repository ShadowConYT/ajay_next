import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AssetImg from '../assets/AssetImg.png';
import BG from '../assets/BG.png';

import localFont from 'next/font/local';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/homepage.css'

const myFont = localFont({
  src:'../assets/fonts/ClassyVogue.otf'
})
export default function Homepage(){

  const data = ['Designer', 'Developer', 'ML Enthusiast'];

  return (
    <>
    <div className='h-screen  relative bg-[#2D3250] overflow-hidden inset-0 flex flex-col items-center'>
      <div className='z-20'>
          <Navbar />
      </div>
      <div className='z-10 mx-10 md:mx-0 relative w-[75vw] md:grid md:grid-cols-2 md:justify-center md:align-middle md:h-full '>
        <div className='md:flex md:flex-col md:justify-center'>
          <AnimatePresence>
          <motion.p
          
          className='text-white md:text-5xl flex lg:bottom-0 m-0 leading-none'>Hi 
            <span>
            <picture>
              <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
            </picture>
            </span>, <span className='pl-2'>I am</span>
            <span className={`lg:bottom-0 pl-3 mb-5  text-[--secondary-color] font-bold font-[montserrat] `} >Ajay</span>
          </motion.p>
          </AnimatePresence>

          <motion.p className='text-gray-200 tracking-wider'>
            Tired of bouncing between siloed teams or struggling to communicate your vision? I'm here to bridge the gap. As a passionate Developer and Designer, I leverage the power of both worlds to create stunning UIs informed by data-driven insights.
            </motion.p>
        </div>
        <div className='relative whole h-full'>
          <motion.div
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            exit={{ x: "-100vh", opacity: 0 }}
          className='circle h-screen lg:h-full md:transform md:translate-x-1/4 md:-translate-y-1/4 lg:transform-none lg:translate-x-0 lg:translate-y-0'>
            <Image src={BG} className='bg lg:hidden' />
            <Image src={AssetImg} className='absolute m-0 p-0 lg:blur-0 lg:bottom-0 scale-x-[-1] md:w-60 lg:w-full translate-x-[4vw] object-scale-down lg:max-h-full z-0' />
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}
