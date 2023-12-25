'use client'
import React from 'react';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useRef } from 'react';
import '../styles/navbar.css';
import SampleLogo from '../assets/SampleLogo.png';

const Navbar = () => {


    const navRef = useRef();
    const showBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <div className='head'>
        <div className='xs:block:md lg:opacity-0 w-20 md:w-20'>
            <Image src={SampleLogo} alt='Logo'/>
        </div>

        <nav className='font-konexy' ref={navRef}> 
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Education</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
            <button className='nav-btn nav-close-btn text-white' onClick={showBar}>
                <FaTimes />
            </button>
        </nav>
        <button onClick={showBar} className="text-white nav-btn">
            <FaBars />
        </button>
    </div>
  )
}

export default Navbar