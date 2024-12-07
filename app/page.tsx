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
    <div className="">
      <div className='mt-24'>
        <div className="mt-8 pl-6">
          <div className="inline">
            <h1 className="text-[#7feaff] typed-out tracking-wide text-lg font-medium pl-[2px]">
              {displayedText}
            </h1>
          </div>
          <div>
            <h1 className="bg-white bg-opacity-60 inline-block p-2 text-black font-bold text-5xl mt-2 ">I&apos;m Sidhesh,</h1>
            <h1 className="bg-white inline-block p-2 text-black font-bold text-5xl mt-2 ">A Software Engineer</h1>
            <p className='py-6 font-semibold w-4/5 text-justify'>
              Specializing in Information Technology with experience in Fullstack Engineering & Development Operations, I&apos;ve always been captivated by the world of programming. It&apos;s something I genuinely enjoy, sparking a passion that keeps me constantly learn and grow. I thrive on creating innovative solutions and turning visionary ideas into reality, all while embracing the joy of developing and building projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}