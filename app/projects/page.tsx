"use client";
import { getProject, getTitleAndTaglines } from "@/sanity/sanity.query";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function Project(){
    
    const [projects,setProjects] = useState([]);
    const [projectHead,setProjectHead] = useState(null);
    useEffect(()=>{
        const fetchProjects = async()=>{
            try{
                const data =  await getProject();
                setProjects(data);
            }catch(error){
                console.log(error);
            }
        }
        fetchProjects();
    },[]);

    useEffect(()=>{
        const fetchAlbum = async()=>{
            try{
                const data = await getTitleAndTaglines();
                setProjectHead(data);
            }catch(error){
                alert(error);
            }
        }
        fetchAlbum();
    },[]);
    
    return(
        
        <div className="mt-12">
            {projectHead && (
                <>
                    <h2 className="text-center text-3xl font-bold text-gray-100">{projectHead[0].projectPageTitle}</h2>
                    <p className="text-center text-gray-100 mt-2">{projectHead[0].projectTagline}</p>
                </>
            )}
            {projects ? ( projects.map((project,id)=>(
                <div key={id} className="flex items-center my-10 border rounded-xl group md:gap-8 border-zinc-600">
                    <article className="relative w-full h-full p-4 md:p-8">
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-xs text-zinc-100">
                            <time dateTime="2023-08-25">{project["startDate"]} <span>-</span> {project["endDate"]}</time>
                            </div>
                        </div>
                        <a href={project["projectUrl"]} target="_blank">
                            <h2 className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display">
                                {project["title"]?? "title"}
                            </h2>
                        </a>
                        <p className="mt-4 leading-8 duration-150 text-zinc-400 text-justify">
                            {project["description"]?? "description"}
                        </p>
                    </article>
                </div>
            ))) : (
                <>
                    <p>Shit No Project Added</p>
                </>
            )}
            
        </div>
    )
}