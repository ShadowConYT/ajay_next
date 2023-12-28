import React from 'react'
import Navbar from '../components/Navbar';
import TypeWriter from '../components/Typewriter';
import Image from 'next/image';
import SatoruGojoPNGImage from '../assets/SatoruGojoPNGImage.webp';
import GitHub from '../assets/Card/GitHub.webp';
import GitAlone from '../assets/Card/GitAlone.png';
import Proj from '../assets/Card/Proj.jpg';

import { Chromate } from '../utils/fonts';
import { FaCodeBranch, FaMobile, FaUserGraduate, FaAward, FaPhoenixFramework} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';

import '../styles/homepage.css'

// floating icons
export default function Homepage(){

  const data = ['Designer', 'Developer', 'ML Enthusiast'];

  const RightCardData = [
    {image: GitHub, title: 'GitHub', descp: 'Visit My Github Profile', link:'', alone: GitAlone},
    {image: Proj, title:'Projects', descp: '',link:'', alone:''},
    {image: '', title:'', descp: '',link:'', alone:''}
  ]

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

        <div className='lg:flex lg:flex-col lg:items-center'>
            {RightCardData.map((card, index) => {
              return(
                <a key={index} href={card.link} alt="Mythrill" className='rounded-lg aTag' target="_blank">
                  <div className="card">
                    <div className="wrapper">
                      <Image src={card.image} className="cover-image" />
                    </div>
                    <p className="title text-white">{card.title}</p>
                    <Image src={card.alone} className="character" />
                  </div>
                </a>
              )
            })}
        </div>

      </div>

    </div>
  )
}
