import React from 'react'
import Navbar from '../components/Navbar';
import TypeWriter from '../components/Typewriter';
import Image from 'next/image';
import AssetImg from '../assets/AssetImg.png';
import GitHub from '../assets/Card/GitHub.png';
import GitAlone from '../assets/Card/GitAlone.png';
import Proj from '../assets/Card/Proj.png';
import Social from '../assets/Card/Social.jpg';

import localFont from 'next/font/local';

import '../styles/homepage.css'

const myFont = localFont({
  src:'../assets/fonts/Attena.otf'
})
export default function Homepage(){

  const data = ['Designer', 'Developer', 'ML Enthusiast'];

  const RightCardData = [
    {image: GitHub, title: 'GitHub', descp: 'Visit My Github Profile', link:'', alone: GitAlone},
    {image: Proj, title:'Projects', descp: '',link:'', alone:''},
    {image: Social, title:'', descp: '',link:'', alone:''}
  ]

  return (
    <div className='h-dvh bg-gradient-to-b from-slate-700 via-slate-600 to-slate-700 overflow-hidden inset-0'>
      <div className='z-10 md:mx-10 w-auto lg:absolute lg:transform lg:translate-x-1/2'>
          <Navbar />
      </div>
      <div className='lg:absolute bottom-0 lg:w-[700px] lg:z-10'>
        <Image src={AssetImg} />
      </div>
      <div className='mx-10 lg:h-screen w-full lg:flex lg:justify-center'>
            <div className=''>
              <p className='text-white justify-center lg:pl-[1.5vw] lg:text-4xl '>Hi 👋, I <span className='text-[--secondary-color]'>am</span></p>
              <h1 className={`text-white lg:bottom-0 m-0 p-0 lg:text-[400px] ${myFont.className} uppercase`} >Ajay</h1>
              {/*<p className='text-white lg:py-2 lg:text-5xl'>I'm a <TypeWriter data= {data} /></p>*/}
            </div>
      </div>

    </div>
  )
}
