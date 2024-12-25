"use client";
import { getProject, getTitleAndTaglines } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/Loading";
import { Link } from "lucide-react";

interface Project {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    projectUrl: string;
}

interface ProjectHead {
    projectPageTitle: string;
    projectTagline: string;
}

export default function Project() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [projectHead, setProjectHead] = useState<ProjectHead[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectData, headData] = await Promise.all([
                    getProject(),
                    getTitleAndTaglines(),
                ]);
                setProjects(projectData);
                setProjectHead(headData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                await sleep(500);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        isLoading ? <LoadingSpinner/> :( 
        <div className="mt-12">
            {projectHead && (
                <>
                    <h2 className="text-center text-xl lg:text-3xl font-bold text-gray-100">{projectHead[0].projectPageTitle}</h2>
                    <p className="text-center text-gray-100 mt-2">{projectHead[0].projectTagline}</p>
                </>
            )}
            {projects.length > 0 ? (
                projects.map((project, id) => (
                    <div key={id} className="flex items-center my-10 mx-14 lg:mx-0 border rounded-xl group md:gap-8 border-zinc-600">
                        <article className="relative w-full h-full p-4 md:p-8">
                            {/* <div className="flex items-center justify-between gap-2"> */}
                                <div className="text-xs text-zinc-100 text-center">
                                    <time dateTime={project.startDate}>
                                        {project.startDate} <span>-</span> {project.endDate}
                                    </time>
                                </div>
                            {/* </div> */}
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                <h2 className="mt-4 text-3xl font-bold text-lime-300 hover:text-white sm:text-4xl font-display text-center">                                        
                                    {project.title ?? "title"}
                                </h2>
                            </a>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 text-center lg:text-justify text-sm lg:text-base">
                                {project.description ?? "description"}
                            </p>
                        </article>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-400">No projects available.</p>
            )}
        </div>)
    );
}
