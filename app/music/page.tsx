"use client";
import { useState, useEffect } from "react";

export default function Music() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const iframe = document.querySelector('iframe[src*="open.spotify.com"]');

        if (iframe) {
            // Use a load event listener for the iframe
            const handleIframeLoad = () => {
                setIsLoaded(true);
            };

            iframe.addEventListener("load", handleIframeLoad);

            // Fallback timeout in case the "load" event is not fired
            const fallbackTimeout = setTimeout(() => setIsLoaded(true), 5000);

            return () => {
                iframe.removeEventListener("load", handleIframeLoad);
                clearTimeout(fallbackTimeout);
            };
        }
    }, []);

    return (
        <div className="mt-12 relative" style={{ height: "352px" }}>
            {/* Loading Spinner */}
            {!isLoaded && (
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
            )}


            {/* Iframe */}
            <iframe
                style={{
                    borderRadius: "12px",
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out", // Smooth fade-in
                }}
                src="https://open.spotify.com/embed/album/49ZMHYxRhvlD37JZ14T1Fl?utm_source=generator&theme=0"
                width="100%"
                height="400"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
}
