'use client';
'use cors';

import Homepage from './page/Homepage';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import { IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion';

const URL = process.env.dbKey;

export default function Home() {
  const [temp, setTemp] = useState();

  // Fetch data from API
  async function fetchData() {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setTemp(data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Cursor movement logic
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const cursorDot = document.querySelector('[data-cursor-dot]');
      const cursorOutline = document.querySelector('[data-cursor-outline]');

      const moveCursor = (e) => {
        const { clientX, clientY } = e;
        if (cursorDot) {
          cursorDot.style.left = `${clientX}px`;
          cursorDot.style.top = `${clientY}px`;
        }
        if (cursorOutline) {
          cursorOutline.animate(
            {
              left: `${clientX}px`,
              top: `${clientY}px`,
            },
            { duration: 4000, fill: 'forwards' }
          );
        }
      };

      document.addEventListener('mousemove', moveCursor);
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  // Scroll-to-top button logic
  const buttonToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = function () {
        const button = document.querySelector('#butt');
        if (button) {
          button.style.display = window.scrollY > 0 ? 'block' : 'none';
        }
      };
    }
  }, []);

  return (
    <>
      <div className="cursor_dot" data-cursor-dot></div>
      <div className="cursor_outline" data-cursor-outline></div>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="z-20 mt-10 lg:mt-0">
          <Navbar />
        </div>
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, type: 'tween' }}
          id="butt"
          onClick={buttonToTop}
          className="fixed hidden z-10 bottom-0 right-0 m-4 p-2 bg-gray-200 rounded-md"
        >
          <IoIosArrowUp />
        </motion.button>
        {/* Only render Router on client-side */}
        {/* {typeof window !== 'undefined' && (
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={temp ? <Homepage dataC={temp.about} /> : <Loader />}
              />
            </Routes>
          </BrowserRouter>
        )} */}
        {
          temp ? <Homepage dataC={temp.about} homePageProjects={temp.homePageProjects} /> : <Loader />
        }
      </main>
    </>
  );
}