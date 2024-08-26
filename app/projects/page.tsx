import { Eye } from "lucide-react";

export default function project(){
    return(
        <div>
            <div className="m-12 border rounded-xl group md:gap-8 border-zinc-600">
                    <article className="relative w-full h-full p-4 md:p-8">
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-xs text-zinc-100">
                            <time dateTime="2023-08-25">Aug 25, 2023</time>
                            </div>
                            <span className="flex items-center gap-1 text-xs text-zinc-500">
                                <Eye width={15} height={15} />
                                1.2K
                            </span>
                        </div>

                        <h2
                            className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display"
                        >
                            Sample Title
                        </h2>
                        <p className="mt-4 leading-8 duration-150 text-zinc-400">
                            This is a sample description for the featured post. It’s meant to give you an idea of how the content will look.
                        </p>
                    </article>
            </div>
        </div>
    )
}