import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AssetImg from '../assets/AssetImg.png';
import GitHub from '../assets/Card/GitHub.png';
import GitAlone from '../assets/Card/GitAlone.png';
import Proj from '../assets/Card/Proj.png';
import Social from '../assets/Card/Social.jpg';

import localFont from 'next/font/local';

import '../styles/homepage.css'

const myFont = localFont({
  src:'../assets/fonts/ClassyVogue.otf'
})
export default function Homepage(){

  const data = ['Designer', 'Developer', 'ML Enthusiast'];

  return (
    <>
    <div className='h-screen relative bg-[#2D3250] overflow-hidden inset-0 flex flex-col items-center'>
      <div className='z-20'>
          <Navbar />
      </div>
      <div className='z-10 mx-10 -gap-y-20 md:min-w-7xl md:flex md:flex-col md:h-full md:items-center md:justify-center'>
        <p className='text-white md:text-5xl flex lg:pl-[1.5vw] lg:text-4xl lg:bottom-0 m-0 leading-none'>Hi 
          <span>
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
          </picture>
          </span>, <span className='text-[--secondary-color] pl-2'>I am</span></p>
          <span className={`text-white md:text-[250px] lg:bottom-0 mb-5 leading-none lg:text-[300px] ${myFont.className} `} >Ajay</span>
      </div>
    </div>
    <Image src={AssetImg} className='absolute -bottom-40 md:blur-sm lg:blur-0 w-auto right-0 md:bottom-0 scale-x-[-1] object-scale-down max-h-full z-0' />
    </>
  )
}
