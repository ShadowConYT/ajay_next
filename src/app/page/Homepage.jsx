import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AssetImg from '../assets/AssetImg.png';
import BG from '../assets/BG.png';

import localFont from 'next/font/local';

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
      <div className='z-10 mx-10 relative -gap-y-20 max-w-4xl md:max-w-[75vw] md:grid md:grid-cols-2 md:align-middle md:h-full '>
        <div className='md:flex md:flex-col md:justify-center'>
          <p className='text-white md:text-5xl flex lg:bottom-0 m-0 leading-none'>Hi 
            <span>
            <picture>
              <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
            </picture>
            </span>, <span className='pl-2'>I am</span>
            <span className={`lg:bottom-0 pl-3 mb-5  text-[--secondary-color] font-bold font-[montserrat] `} >Ajay</span>
          </p>
          <p className='text-gray-200 tracking-wider'>
            Tired of bouncing between siloed teams or struggling to communicate your vision? I'm here to bridge the gap. As a passionate Developer and Designer, I leverage the power of both worlds to create stunning UIs informed by data-driven insights.
            </p>
        </div>

        <div className='relative h-full'>
          <div className='circle h-full'>
            <Image src={BG} className='bg' />
            <Image src={AssetImg} className='absolute lg:blur-0 right-0 lg:bottom-0 scale-x-[-1] object-scale-down lg:max-h-full z-0' />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
