"use client";
import { MoonStar } from "lucide-react";
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
            'path': 'Projects',
            'href':'/projects',
        },
        {
            'path': 'Music',
            'href':'/music',
        }
    ]
	return (
		<header>
			<div>
				<div className="flex justify-between items-center mt-8 p-4 font-medium rounded-xl backdrop-blur-sm bg-slate-300 bg-opacity-80">
                    <div className="pl-4">
                        <Image className="w-12 h-8" width={500} height={500} src={"/logo.png"} alt={"logo"} />
                    </div>
                    
					<div className="flex gap-8">
                        {
                            routes.map((route,id)=>(
                                <Link className={`bolder ${route.href===pathname?'text-slate-900':'text-slate-700'} `} key={id} href={route.href}>
                                    {route.path}
                                </Link>
                            ))
                        }
					</div>

                    <div className="pr-4 cursor-pointer">
                        <MoonStar color="black" />
                    </div>
                    
				</div>
			</div>
		</header>
	);
};