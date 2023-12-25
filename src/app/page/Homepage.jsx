import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import SatoruGojoPNGImage from '../assets/SatoruGojoPNGImage.webp';

export default function Homepage(){
  return (
    <div className='h-screen overflow-hidden inset-0'>
      <div className='z-10'>
          <Navbar />
      </div>
      <Image className='-z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:w-[500px]' src={SatoruGojoPNGImage} alt="Satoru Gojo" />

    </div>
  )
}
