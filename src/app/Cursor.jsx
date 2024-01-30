import React from 'react';
import { useEffect } from 'react';

const Cursor = () => {

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
    <div>
        <div className='cursor_dot' data-cursor-dot></div> {/* cursor */}
        <div className='cursor_outline' data-cursor-outline></div> {/* cursor */}
    </div>
  )
}

export default Cursor