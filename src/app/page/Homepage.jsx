'use cors'
import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AssetImg from '../assets/AssetImg.webp';
import BG from '../assets/BG.jpg';
import PropTypes from 'prop-types';

import localFont from 'next/font/local';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/homepage.css';


const myFont = localFont({
  src:'../assets/fonts/ClassyVogue.otf'
})

const Homepage = ({ data }) => {

  const { about, aboutIMG, title } = data;

  const ResumeLink = () => {
    const PDFpath = "../assets/Resume.pdf"
    window.open("/Resume.pdf", "_blank");
  }

  return (
    <>
    <div className='h-[100vh]  relative bg-[#1c2430] overflow-hidden inset-0 flex flex-col md:justify-center lg:justify-normal items-center'>
      <div className='z-20 mt-10 lg:mt-0'>
          <Navbar />
      </div>
      <div className='z-10 mt-16 md:mt-0 md:mx-0 relative w-96 md:w-[75vw] grid grid-cols-1 md:grid-cols-2 justify-center align-middle h-full '>
        <div className='flex md:flex-col md:justify-center'>
          <div>
            <div className='font-[montserrat] font-semibold flex text-white text-2xl text-center justify-center md:justify-normal  md:text-4xl lg:bottom-0 m-0 leading-none'>
              <AnimatePresence>
              <motion.span
                className=''>Hi</motion.span>
                <span className='p-0 m-0 top-1'>
                  <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" className='w-6 md:w-8 lg:w-9' />
                  </picture>
                </span>, <span className='pl-2'>I am</span>
                <span className={`lg:bottom-0 pl-1.5 md:pl-3 mb-5  text-[--secondary-color] font-extrabold uppercase`} >Ajay</span>
              </AnimatePresence>
            </div>
            

              <motion.p className='text-justify md:text-left md:w-auto text-gray-200 tracking-wider'>
                {about}
              </motion.p>

              <div className='flex justify-center md:block'>
                <button className="button text-center mt-2 md:mt-5" onClick={ResumeLink}>
                  Resume
                </button>
              </div>
              
              

          </div>
        </div>
        <div className='relative whole md:h-full flex justify-center md:block'>
          <div
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            exit={{ x: "-100vh", opacity: 0 }}
          className='circle md:h-screen lg:h-full transform md:translate-x-1/4 md:-translate-y-1/4 lg:transform-none lg:translate-x-0 lg:translate-y-0'>
            <Image src={BG} alt='profile-bg' className='bg lg:hidden' />
            <Image src={AssetImg} alt='profile' className='absolute m-0 p-0 lg:blur-0 lg:bottom-0 scale-x-[-1] min-w-[170px] max-w-[23vw] md:max-w-none md:min-w-none  md:w-60 lg:w-full translate-x-[20%] md:translate-x-[15%] object-scale-down lg:max-h-full z-0' />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage;
