'use cors'
import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';

import localFont from 'next/font/local';
import { motion } from 'framer-motion';
import '../styles/homepage.css';

import { TiSocialInstagramCircular,
          TiSocialLinkedinCircular,
          TiSocialTwitterCircular,
          TiSocialFacebookCircular } from "react-icons/ti";



const myFont = localFont({
  src:'../assets/fonts/ClassyVogue.otf'
})

const Homepage = ({ dataC }) => {

  const {name, about, aboutIMG, BGimg, resume } = dataC;

  const socials = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/ajay.developer/',
      icon: <TiSocialInstagramCircular className='text-5xl' />
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/theajay06/',
      icon: <TiSocialLinkedinCircular className='text-5xl' />
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/ajaysuresh',
      icon: <TiSocialTwitterCircular className='text-5xl' />
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/',
      icon: <TiSocialFacebookCircular className='text-5xl' />
    }
  ]

  const ResumeLink = () => {
    window.open('/Resume.pdf', "_blank");
  }

  return (
    <>
    <div className='h-[100vh] relative bg-[#1c2430] overflow-hidden inset-0 flex flex-col md:justify-center lg:justify-normal items-center'>
      <div className='z-20 mt-10 lg:mt-0' >
          <Navbar />
      </div>
      <div className='z-10 mt-16 md:mt-0 md:mx-0 relative w-[75vw] md:w-[75vw] grid grid-cols-1 md:grid-cols-2 justify-center align-middle h-full '>
        <div className='flex md:flex-col md:justify-center'>
          <div>
            <div className='font-[montserrat] font-semibold flex text-white text-2xl text-center justify-center md:justify-normal  md:text-4xl lg:bottom-0 m-0 leading-none'>
              <motion.span
                initial = {{opacity:0, y: 50, duration: 5}}
                animate = {{opacity:1, y:0, duration: 5}}
                whileInView={{opacity:1, y:0, duration: 5, transition: {delay:0.5}}}
                className=''>Hi</motion.span>
                <motion.span 
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:0.5}}}
                  className='p-0 m-0 top-1'>
                  
                  <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" className='w-6 md:w-8 lg:w-9' />
                  </picture>
                </motion.span>
                <motion.span 
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:0.8}}}
                  className='pl-2'>, I am</motion.span>
                <motion.span 
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:1.1}}}
                  className={`lg:bottom-0 pl-1.5 md:pl-3 mb-5  text-[--secondary-color] font-extrabold uppercase`} >{name}</motion.span>
            </div>
            

              <motion.p
                initial = {{opacity:0, y: 50, duration: 5}}
                animate = {{opacity:1, y:0, duration: 5}}
                whileInView={{opacity:1, y:0, duration: 5, transition: {delay:1.4}}}
                className='text-justify md:text-left md:w-auto text-gray-200 tracking-wider'>
                {about}
              </motion.p>

              <motion.div 
                initial = {{opacity:0, y: 50, duration: 5}}
                animate = {{opacity:1, y:0, duration: 5}}
                whileInView={{opacity:1, y:0, duration: 5, transition: {delay:1.7}}}
                className='flex justify-center md:block'>
                <button className="button text-center mt-2 md:mt-5" onClick={ResumeLink}>
                  Resume
                </button>
              </motion.div>
          </div>
        </div>
        <div className='socialContainer hidden lg:block'>
              {socials.map((social, index) => {
                return (
                  <div key={index} className='socials hidden lg:block' ><a target='_blank' href={social.link}>{social.icon}</a></div>
                )
              })}
            </div>
        <div style={{pointerEvents:'none'}} className='relative whole md:h-full flex justify-center md:block'>
          <motion.div
          className='circle md:h-screen lg:h-full transform md:translate-x-1/4 md:-translate-y-1/4 lg:transform-none lg:translate-x-0 lg:translate-y-0'>
            <Image src={BGimg} width={500} height={500} alt='profile-bg' className='bg lg:hidden' />
            <Image src={aboutIMG} width={500} height={500} alt='profile' className='absolute m-0 p-0 lg:blur-0 lg:bottom-0 scale-x-[-1] min-w-[170px] max-w-[23vw] md:max-w-none md:min-w-none  md:w-60 lg:w-full translate-x-[20%] md:translate-x-[15%] object-scale-down lg:max-h-full z-0' />
        </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage;
