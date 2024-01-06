'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useRef } from 'react';
import '../styles/navbar.css';

const Navbar = () => {


    const navRef = useRef();
    const showBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    useEffect(() => {
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
    }, []);


    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1024);
        }

        // Run once to set initial state
        handleResize();

        // Set up event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
        


  return (
    <div className='head md:min-w-9xl' >
        <div className='xs:block:md lg:opacity-100 md:w-20'>
            <span>Ajay</span>
        </div>
        <nav id='nav' className='font-roz' ref={navRef}> 
            <a className='aTag' href="#">About</a>
            <a className='aTag' href="#">Skills</a>
            <a className='aTag' href="#">Education</a>
            <a className='aTag' href="#">Works</a>
            <a className='aTag' href="#">Contact</a>
            {isMobileView ? 
                <button className='nav-btn nav-close-btn text-white' onClick={showBar}>
                    <FaTimes />
                </button> : null  
            }
            
        </nav>
        {isMobileView ? 
            <button onClick={showBar} className="text-white nav-btn">
                <FaBars />
            </button>
            : null
        }
    </div>
  )
}

export default Navbar