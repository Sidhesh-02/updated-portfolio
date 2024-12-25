"use client";
import { getSkills, getTitleAndTaglines } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/Loading";

// Define the expected data structures
interface Skill {
    skillField: string[];
    learningField: string[];
}

interface SkillHead {
    skillsPageTitle: string;
    skillsTagline: string;
}

const Skills = () => {
    const [skillHead, setSkillHead] = useState<SkillHead[] | null>(null);
    const [skills, setSkills] = useState<Skill[] | null>(null);
    const [loading,setLoading] = useState(true);
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [skillHeadData, skillsData] = await Promise.all([
                    getTitleAndTaglines(),
                    getSkills(),
                ]);
                setSkillHead(skillHeadData);
                setSkills(skillsData);
            } catch (error) {
                alert("Error fetching data: " + error);
            }finally{
                await sleep(500);
                setLoading(false)
            }
        };
    
        fetchData();
    }, []);

    return (
        loading ? (<LoadingSpinner/>) :(
        <div className="mt-12 mx-14">
            {skillHead && skillHead.length > 0 && (
                skillHead.map((skill, index) => (
                    <div key={index}>
                        <h2 className="text-center text-xl lg:text-3xl font-bold text-gray-100">
                            {skill.skillsPageTitle}
                        </h2>
                        <p className="text-center text-gray-100 mt-2">
                            {skill.skillsTagline}
                        </p>
                    </div>
                ))
            )}
            <div>
                <div>
                    {skills && skills.length > 0 && (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 my-8 p-4">
                                {skills.map((skill, index) =>
                                    skill.skillField.map((element, key) => (
                                        <div
                                            key={`${index}-${key}`}
                                            className="flex flex-col items-center justify-center border border-slate-300 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 text-white"
                                        >
                                            <p className="text-xs lg:text-lg font-semibold">{element}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div>
                    {skills && skills.length > 0 && (
                        <>
                            <h2 className="text-center text-lime-300 font-semibold py-4">Still Learning</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 p-4">
                                {skills.map((skill, index) =>
                                    skill.learningField.map((element, key) => (
                                        <div
                                            key={`${index}-${key}`}
                                            className="flex flex-col items-center justify-center border border-slate-300 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 text-slate-300"
                                        >
                                            <p className="text-xs lg:text-lg text-center font-semibold">{element}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>)
    );
};

export default Skills;
