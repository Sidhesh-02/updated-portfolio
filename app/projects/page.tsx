import { Eye } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        timeline:"Aug 25, 2023",
        views:"1.2K",
        title:"Sample Title",
        description:"This is a sample description for the featured post. It’s meant to give you an idea of how the content will look."
    },
    {
        timeline:"Aug 25, 2023",
        views:"1K",
        title:"Sample Title 2",
        description:"This is a sample description for the featured post. It’s meant to give you an idea of how the content will look."
    },
    {
        timeline:"Aug 25, 2023",
        views:"1.2K",
        title:"Sample Title 3",
        description:"This is a sample description for the featured post. It’s meant to give you an idea of how the content will look."
    }
]
export default function project(){
    return(
        <div className="mt-12">
            <h2 className="text-center text-3xl font-bold text-gray-100">Projects</h2>
            <p className="text-center text-gray-100 mt-2">A Catalog of Stories.</p>
            {projects.map((project,id)=>(
                <div key={id} className="flex items-center my-10 border rounded-xl group md:gap-8 border-zinc-600">
                    <article className="relative w-full h-full p-4 md:p-8">
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-xs text-zinc-100">
                            <time dateTime="2023-08-25">{project.timeline?? ""}</time>
                            </div>
                            <span className="flex items-center gap-1 text-xs text-zinc-500">
                                <Eye width={15} height={15} />
                                {project.views?? "views"}
                            </span>
                        </div>

                        <h2
                            className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display"
                        >
                            {project.title?? "title"}
                        </h2>
                        <p className="mt-4 leading-8 duration-150 text-zinc-400">
                            {project.description?? "description"}
                        </p>
                    </article>
                </div>
            ))}
            
        </div>
    )
}