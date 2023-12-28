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
    <div className='h-dvh lg:mx-10 overflow-hidden inset-0'>
      <div className='z-10'>
          <Navbar />
      </div>
      
      <div className='lg:h-full lg:grid lg:grid-cols-3 lg:justify-evenly'>
        <div className='lg:flex lg:items-center'>
          <div className='lg:align-middle lg:items-center'>
            <p className='text-white lg:pl-5 lg:text-3xl '>Hi 👋, I <span className='text-[--secondary-color]'>am</span></p>
            <h1 className='text-white lg:text-8xl' >Ajay</h1>
          </div>
        </div>

        <div className='relative'>
          <Image className='w-[500px] absolute bottom-16' src={SatoruGojoPNGImage} alt='Satoru Gojo' />
        </div>

        <div>

        </div>

      </div>

    </div>
  )
}
