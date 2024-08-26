'use client'
import { useEffect, useState } from 'react';
import "./globals.css";
export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hey there ! ";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="gradientcanvas">
      <div className='mt-12'>
        <div className="mt-8 pl-6">
          <div className="inline">
            <h1 className="text-[#7feaff] typed-out tracking-wide text-lg font-medium pl-[2px]">
              {displayedText}
            </h1>
          </div>
          <h1 className="text-5xl m-0 font-bold py-4 headerIntro">I&apos;m Sidhesh,</h1>
          <h1 className="text-5xl m-0 font-bold py-4 headerIntro">Fullstack Developer.</h1>
          <p className='py-6 font-semibold w-4/5'>
            From an early age, my fascination with programming and computers ignited a lifelong passion. Constantly learning and developing, I strive to make a profound impact through innovative solutions and visionary ideas, shaping the future with my unwavering commitment to technological advancement.
          </p>
        </div>
      </div>
    </div>
  );
}