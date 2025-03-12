'use client';
import { useEffect, useState } from 'react';
import './globals.css';
import { getProfile } from '@/sanity/sanity.query';
import { ProfileType } from '@/types';
import { LoadingSpinner } from './components/Loading';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [profileData, setProfileData] = useState<ProfileType[]>([]);
  const fullText = 'Hey there ! ';

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
    <div className="pl-12 md:px-0">
      <div className="absolute top-[20%] md:top-[30%]">
        {profileData.length > 0 ? (
          profileData.map((profile, index) => (
            <div key={index} className="pl-4 md:pl-6">
              {/* Greeting Text */}
              <div className="inline">
                <h1 className="text-lime-300 typed-out tracking-wide text-lg md:text-2xl font-medium pl-[2px]">
                  {displayedText}
                </h1>
              </div>
              
              {/* Profile Content */}
              <div>
                <h1 className="bg-white bg-opacity-60 inline-block p-2 text-black font-bold text-xl md:text-5xl mt-2">
                  {profile.fullName}
                </h1>
                <h1 className="bg-white border border-lime-300 inline-block p-2 text-black font-bold text-xl md:text-5xl md:mt-2">
                  {profile.position}
                </h1>

                {/* Bio Content */}
                <p className="border rounded-md border-lime-300 my-2 px-3 py-6 font-semibold text-sm md:text-base lg:text-lg text-left md:text-justify w-4/5 shadow-2xl ">
                  {profile.shortBio}
                </p>

              </div>
            </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}
