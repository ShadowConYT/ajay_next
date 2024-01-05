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

    let btnContainer = document.getElementById('nav');
    let btns = btnContainer.getElementsByClassName('aTag');

    for (let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            let current = document.getElementsByClassName('active');

            if (current.length > 0){
                current[0].className = current[0].className.replace(' active', '');
            }

            this.className += ' active';
        })
    }

  return (
    <div className='head'>
        <div className='xs:block:md lg:opacity-0 w-20 md:w-20'>
            <Image src={SampleLogo} alt='Logo'/>
        </div>

        <nav id='nav' className='font-roz' ref={navRef}> 
            <a className='aTag' href="#">About</a>
            <a className='aTag' href="#">Skills</a>
            <a className='aTag' href="#">Education</a>
            <a className='aTag' href="#">Works</a>
            <a className='aTag' href="#">Contact</a>
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