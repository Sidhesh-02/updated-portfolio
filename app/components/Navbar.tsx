"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Social from "./Social";

export default function Navigation() {
    const [isSidePanelOpenNav,setIsSidePanelOpenNav] = useState(false);
    const pathname = usePathname();

    const routes = [
        { path: "Home", href: "/" },
        { path: "Album", href: "/music" },
        { path: "Skills", href: "/skills" },
        { path: "Projects", href: "/projects" },
    ];

    const toggleMenu = () => setIsSidePanelOpenNav(!isSidePanelOpenNav);
isSidePanelOpenNav
    return (
        <header className="mx-6 md:mx-0">
            <div className="flex justify-between items-center mt-8 p-4 font-medium rounded-xl bg-transparent border border-gray-300">
                
                <div className="pl-4">
                    <Image
                        className="w-12 h-8 brightness-200"
                        width={500}
                        height={500}
                        src={"/logo.png"}
                        priority={true}
                        alt={"logo"}
                    />
                </div>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex gap-8 z-20">
                    {routes.map((route, id) => (
                        <Link
                        className={`custom-font ${
                            route.href === pathname ? "text-lime-300" : "text-white"
                        }`}
                            key={id}
                            href={route.href}
                        >
                            {route.path}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden flex items-center pr-4">
                    <button onClick={toggleMenu}>
                        <Menu color="white" size={28} />
                    </button>
                </div>
                <div className="pr-4 hidden md:block">
                    
                </div>
            </div>
            {/* Navigation Links - Mobile */}
            
            <div className="fixed top-1/3 left-0 h-full w-16 bg-transparent text-white p-6 z-50">
                <nav className="flex flex-col justify-center items-center gap-4">
                    <Social/>
                </nav>
            </div>
            
            {isSidePanelOpenNav && (
                <div className="fixed top-0 right-0 h-full w-48 bg-black text-white p-6 z-50 transform animate-slide-in">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Space</h2>
                        <button onClick={toggleMenu} className="text-white">
                            X
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        {routes.map((route, id) => (
                            <Link
                                key={id}
                                href={route.href}
                                className="hover:text-gray-400"
                                onClick={toggleMenu}
                            >
                                {route.path}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
