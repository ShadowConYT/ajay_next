'use client'
'use cors'
import Homepage from './page/Homepage';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Projects from './page/Projects';
import { About } from './page/About';
import Works from './page/Works';

const URL = process.env.dbKey;

export default function Home() {

  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    const links = document.querySelectorAll('a');

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
      
      cursorOutline.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, {duration: 4000, fill: 'forwards'})
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
  };
}, []);

  const [temp, setTemp] = useState();
  
  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setTemp(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log(temp && temp.aboutPage);

  const buttonToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
  
  if (typeof window !== 'undefined') {
    window.onscroll = function() {
      if (window.scrollY > 0) {
        document.querySelector('#butt').style.display = 'block';
      } else {
        document.querySelector('#butt').style.display = 'none';
      }
    }
  }
  
  
  return (
    <>
      <div className='cursor_dot' data-cursor-dot></div> {/* cursor */}
      <div className='cursor_outline' data-cursor-outline></div> {/* cursor */}
    <main className="min-h-screen flex-col items-center justify-between">
      <button id='butt' onClick={buttonToTop} className='fixed hidden z-10 bottom-0 right-0 m-4 p-2 bg-gray-200 rounded-md'>To Top</button>
      
      <section>
        {temp ? <Homepage dataC = {temp && temp.about}  /> : <Loader />}
      </section>
      <section id='about'>
        <About dataC = {temp} />
      </section>
      {/* <section id='projects' className='h-dvh'>
        <Projects />
      </section> */}
      <section id='works' className='h-dvh'>
        <Works />
      </section>
    </main>
    </>
  )
}
