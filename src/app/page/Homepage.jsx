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
      <div className='h-96 md:h-full w-fit flex flex-col align-middle'>
        <p className={`${Chromate.className} text-left text-3xl text-white`}>I'm</p>
        <h1 className={`${Chromate.className} -z-20 text-5xl  md:text-[100px] lg:text-[175px] uppercase text-center text-white`}>Ajay Suresh</h1>
      </div>
    
      <div>
        <Image className='-z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 md:w-[500px]' src={SatoruGojoPNGImage} alt="Satoru Gojo" />
      </div>

    </div>
  )
}
