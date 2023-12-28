import React from 'react'
import Navbar from '../components/Navbar';
import TypeWriter from '../components/Typewriter';
import Image from 'next/image';
import SatoruGojoPNGImage from '../assets/SatoruGojoPNGImage.webp';

import { Chromate } from '../utils/fonts';
import { FaCodeBranch, FaMobile, FaUserGraduate, FaAward, FaPhoenixFramework} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';

import '../styles/homepage.css'

// floating icons
export default function Homepage(){

  const data = ['Designer', 'Developer', 'ML Enthusiast'];

  const rightCard = () => {
    return(
      <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
        <div class="card">
          <div class="wrapper">
            <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
          </div>
          <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
          <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />
        </div>
      </a>
    )
  }

  return (
    <div className='h-dvh lg:mx-10 overflow-hidden inset-0'>
      <div className='z-10 lg:absolute lg:transform lg:translate-x-1/2'>
          <Navbar />
      </div>
      <div className='lg:h-screen lg:grid lg:grid-cols-3 lg:justify-evenly'>
        <div className='lg:flex lg:items-center lg:pl-10'>
          <div className='lg:align-middle lg:items-center'>
            <p className='text-white lg:pl-[1.5vw] lg:text-4xl '>Hi 👋, I <span className='text-[--secondary-color]'>am</span></p>
            <h1 className='text-white lg:text-9xl' >Ajay</h1>
            <p className='text-white lg:py-2 lg:text-5xl'>I am a <span className='text-[--secondary-color]'><TypeWriter data= {data} /></span></p>
          </div>
        </div>

        <div className='relative'>
          <Image className='w-[500px] absolute bottom-0' src={SatoruGojoPNGImage} alt='Satoru Gojo' />
        </div>

        <div>

        </div>

      </div>

    </div>
  )
}
