"use client";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){

    const pathname = usePathname();
    const routes = [
        {
            'path': 'Home',
            'href':'/',
        },
        {
            'path': 'Album',
            'href':'/music',
        },
        {
            'path': 'Projects',
            'href':'/projects',
        },
        
    ]
	return (
		<header className="navBar">
			<div>
				<div className="flex justify-between items-center mt-8 p-4 font-medium rounded-xl bg-transparent border border-gray-300">
                    <div className="pl-4">
                        <Image className="w-12 h-8 brightness-200" width={500} height={500} src={"/logo.png"} alt={"logo"} />
                    </div>
                    
					<div className="flex gap-8 z-20">
                        {
                            routes.map((route,id)=>(
                                <Link className={`${route.href===pathname?'text-[#7feaff]':'text-white'} `} key={id} href={route.href}>
                                    {route.path}
                                </Link>
                            ))
                        }
					</div>

                    <div className="pr-4">
                        <Rocket color="white"/>
                    </div>
                    
				</div>
			</div>
		</header>
	);
};