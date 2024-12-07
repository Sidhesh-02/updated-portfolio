'use client'
import { useEffect, useState } from 'react';
import "./globals.css";
import { getProfile } from '@/sanity/sanity.query';
import { ProfileType } from '@/types';
export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [profileData, setProfileData] = useState<ProfileType[]>([]);
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

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profile: ProfileType[] = await getProfile();
        setProfileData(profile);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="">
      <div className='mt-24'>
        {profileData.length > 0 ? (profileData.map((profile, index) => (
            <div key={index} className="mt-8 pl-6">
              <div className="inline">
                <h1 className="text-[#7feaff] typed-out tracking-wide text-lg font-medium pl-[2px]">
                  {displayedText}
                </h1>
              </div>
              <div>
                <h1 className="bg-white bg-opacity-60 inline-block p-2 text-black font-bold text-5xl mt-2 ">
                    {profile.fullName}
                </h1>
                <h1 className="bg-white inline-block p-2 text-black font-bold text-5xl mt-2 ">{profile.position}</h1>
                <p className='py-6 font-semibold w-4/5 text-justify'>
                  {profile.shortBio}
                </p>
              </div>
            </div>
          ))
          
          ) : (
            <div
                className="absolute inset-0 flex justify-center items-center"
                style={{
                    borderRadius: "12px",
                    zIndex: 10,
                }}
            >
                <div
                    className="p-4 rounded-full bg-[#7feaff] bg-opacity-80 flex justify-center items-center"
                    style={{
                        animation: "spin-slow 2s linear infinite", 
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                    </svg>
                </div>
            </div>
          )
        }
        
      </div>
    </div>
  );
}