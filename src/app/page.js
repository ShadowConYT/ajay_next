'use client'
import Homepage from './page/Homepage';
import { useEffect } from 'react';

export default function Home() {

  const dotenv = require('dotenv');
  dotenv.config({path: './config.env'});

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

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <div className='cursor_dot' data-cursor-dot></div> {/* cursor */}
      <div className='cursor_outline' data-cursor-outline></div> {/* cursor */}
      <section>
        <Homepage />
      </section>
      <section className='h-dvh'>
        hello
      </section>
    </main>
  )
}
