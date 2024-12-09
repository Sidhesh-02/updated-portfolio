"use client";

import { useState, useEffect } from "react";
import { getSpotifyEmbed, getTitleAndTaglines } from "@/sanity/sanity.query";

export default function Music() {
    const [isLoading, setIsLoading] = useState(true); 
    const [spotifyUrl, setSpotifyUrl] = useState(""); 
    const [album, setAlbum] = useState(null); 
    const [error, setError] = useState(null); 

    // Fetch all data
    const fetchData = async () => {
        try {
            const [spotifyData, albumData] = await Promise.all([
                getSpotifyEmbed(),
                getTitleAndTaglines(),
            ]);

            // Handle Spotify URL
            if (spotifyData && spotifyData.length > 0) {
                setSpotifyUrl(spotifyData[0].spotifyEmbed);
            } else {
                throw new Error("No Spotify embed URL found.");
            }

            // Handle Album Data
            if (albumData && albumData.length > 0) {
                setAlbum(albumData);
            } else {
                throw new Error("No album data available.");
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message);
        } finally {
            setIsLoading(false); 
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Common Loading Spinner
    const LoadingSpinner = () => (
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
    );

    return (
        <div className="mt-12 relative">
            {/* Show Loading Spinner */}
            {isLoading && <LoadingSpinner />}

            {/* Error Message */}
            {!isLoading && error && (
                <p className="text-center text-red-500">{error}</p>
            )}

            {/* Album Content */}
            {!isLoading && album && (
                <>
                    <h2 className="text-center text-3xl font-bold text-gray-100">
                        {album[0].albumPageTitle}
                    </h2>
                    <p className="text-center text-gray-100 my-2">
                        {album[0].projectTagline}
                    </p>
                </>
            )}

            {/* Spotify Embed */}
            {!isLoading && spotifyUrl && (
                <iframe
                    style={{
                        borderRadius: "12px",
                        opacity: 0.9,
                        transition: "opacity 0.5s ease-in-out",
                    }}
                    className="mt-8 mb-10"
                    src={spotifyUrl}
                    width="100%"
                    height="400"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            )}
        </div>
    );
}
