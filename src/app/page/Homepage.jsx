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

  const RightCardData = [
    {image: GitHub, title: 'GitHub', descp: 'Visit My Github Profile', link:'', alone: GitAlone},
    {image: Proj, title:'Projects', descp: '',link:'', alone:''},
    {image: Social, title:'', descp: '',link:'', alone:''}
  ]

  return (
    <div className='h-screen bg-[#2D3250] overflow-hidden inset-0 flex flex-col items-center'>
      <div className='z-10'>
          <Navbar />
      </div>
      <div className='mx-10 -gap-y-20 md:max-w-7xl lg:flex lg:flex-col lg:h-full lg:items-center lg:justify-center'>
        <p className='text-white flex lg:pl-[1.5vw] lg:text-4xl lg:bottom-0 m-0 leading-none'>Hi 
          <span>
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
          </picture>
          </span>, <span className='text-[--secondary-color] pl-2'>I am</span></p>
        <span className={`text-white lg:bottom-0 m-0 leading-none lg:text-[400px] ${myFont.className} `} >Ajay</span>
      </div>
    </div>
  )
}
