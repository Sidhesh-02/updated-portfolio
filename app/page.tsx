'use client'
import { useEffect, useState } from 'react';
import "./globals.css";
import { getProfile } from '@/sanity/sanity.query';
import { ProfileType } from '@/types';
import { LoadingSpinner } from './components/Loading';
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
        {
          profileData.length > 0 ? 
          (profileData.map((profile, index) => (
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
          
          ) : <LoadingSpinner/>
        }
        
      </div>
    </div>
  );
}