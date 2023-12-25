import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import SatoruGojoPNGImage from '../assets/SatoruGojoPNGImage.webp';

import { Chromate } from '../utils/fonts';
import { FaCodeBranch, FaMobile, FaUserGraduate, FaAward, FaPhoenixFramework} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';

import '../styles/homepage.css'

// floating icons
export default function Homepage(){

  return (
    <div className='h-screen overflow-hidden inset-0'>
      <div className='z-10'>
          <Navbar />
      </div>
      <div className='h-96 md:h-full items-center  align-middle'>
        <p className={`${Chromate.className} text-left text-white`}>I'm</p>
        <h1 className={`${Chromate.className} -z-20 text-5xl  md:text-[100px] lg:text-[175px] uppercase text-center text-white`}>Ajay Suresh</h1>
      </div>

    {/*
      <a href="" className='iconFloat absolute top-[200px] right-[300px] md:top-[150px] md:right-[300px] lg:top-[150px] lg:right-[500px] text-xl text-white'><FaCodeBranch /></a>
      <a href="" className='absolute iconFloat top-[150px] left-[300px] md:top-[200px] md:left-[300px] lg:top-[150px] lg:left-[500px] text-xl text-white'><FaMobile /></a>
      <a href="" className='iconFloat absolute top-[350px] left-[300px] md:bottom-[150px] md:right-[300px] lg:bottom-[150px] lg:right-[500px] text-xl text-white'><FaGears /></a>
      <a href="" className='iconFloat absolute top-[330px] right-[200px] md:bottom-[150px] md:left-[300px] lg:bottom-[150px] lg:left-[500px] text-xl text-white'><FaUserGraduate /></a>
      <a href="" className='iconFloat absolute top-[400px] right-[300px] md:top-[300px] md:left-[200px] lg:top-[250px] lg:left-[600px] text-xl text-white'><FaAward /></a>
      <a href="" className='iconFloat absolute top-[150px] right-[180px] md:top-[320px] md:right-[300px] lg:top-[250px] lg:right-[600px] text-xl text-white'><FaPhoenixFramework /></a>
  */}

      <div>
        <Image className='-z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 md:w-[500px]' src={SatoruGojoPNGImage} alt="Satoru Gojo" />
      </div>

    </div>
  )
}
