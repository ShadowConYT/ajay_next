'use client'
'use cors'
import Homepage from './page/Homepage';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import dynamic from 'next/dynamic';
import Projects from './page/Projects';

const DynamicProjectComponent = dynamic(() => import('./page/Projects.jsx'), { ssr: false });


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

  const [temp, setTemp] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json =>  setTemp(json))
      .then(() => console.log())
      return result;
    }
    fetchData();
  }, [])


  return (
    <>
      <div className='cursor_dot' data-cursor-dot></div> {/* cursor */}
      <div className='cursor_outline' data-cursor-outline></div> {/* cursor */}
    <main className="min-h-screen flex-col items-center justify-between">

      <section>
        {temp ? <Homepage data = {temp.about}  /> : <Loader />}
      </section>
      <section className='h-dvh'>
        <Projects />
      </section>
    </main>
    </>
  )
}
