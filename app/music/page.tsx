"use client";

import { useState, useEffect } from "react";
import { getSpotifyEmbed, getTitleAndTaglines } from "@/sanity/sanity.query";
import { LoadingSpinner } from "../components/Loading";

// Define the expected Album type
interface Album {
    albumPageTitle: string;
    projectTagline: string;
}

export default function Music() {
    const [spotifyUrl, setSpotifyUrl] = useState<string | "">("");
    const [album, setAlbum] = useState<Album | null>(null);
    const [loading,isLoading] = useState(false);
    // Fetch all data

    

    const fetchData = async () => {
        try {
            const [spotifyData, albumData] = await Promise.all([
                getSpotifyEmbed(),
                getTitleAndTaglines(),
            ]);
            if (spotifyData && spotifyData.length > 0) {
                setSpotifyUrl(spotifyData[0].spotifyEmbed);
            } else {
                console.warn("No Spotify embed URL found.");
            }
            if (albumData && albumData.length > 0) {
                setAlbum({
                    albumPageTitle: albumData[0].albumPageTitle,
                    projectTagline: albumData[0].projectTagline,
                });
            } else {
                console.warn("No album data available.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        const iframe = document.querySelector('iframe[src*="open.spotify.com"]');

        if (iframe) {
            // Use a load event listener for the iframe
            const handleIframeLoad = () => {
                isLoading(true);
            };

            iframe.addEventListener("load", handleIframeLoad);

            // Fallback timeout in case the "load" event is not fired
            const fallbackTimeout = setTimeout(() => isLoading(true), 5000);

            return () => {
                iframe.removeEventListener("load", handleIframeLoad);
                clearTimeout(fallbackTimeout);
            };
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        loading ? <LoadingSpinner/> : 
        (<>
            <div className="mt-12 mx-14 lg:mx-0">
                {album && (
                    <>
                        <h2 className="text-center text-3xl font-bold text-gray-100">
                            {album.albumPageTitle}
                        </h2>
                        <p className="text-center text-gray-100 my-2">
                            {album.projectTagline}
                        </p>
                    </>
                )}
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
                />

            </div>
        </>)
    );
}
