import {
    Code,
    Codepen,
    ChevronUp,
    Server,
    Database,
    TerminalSquare,
    BadgeCheck,
    Cloud,
    Layout,
    Feather,
    Globe,
    Zap,
} from "lucide-react";

const developmentStack = [
    { name: "HTML", icon: <Layout /> },
    { name: "CSS", icon: <ChevronUp /> },
    { name: "Tailwind", icon: <Cloud /> },
    { name: "JavaScript", icon: <Zap /> },
    { name: "TypeScript", icon: <Codepen /> },
    { name: "React", icon: <BadgeCheck /> },
    { name: "Next.js", icon: <Globe /> },
    { name: "Node.js", icon: <Server /> },
    { name: "PostgreSQL", icon: <Database /> },
    { name: "MySQL", icon: <Code /> },
    { name: "Git/GitHub", icon: <TerminalSquare /> },
    { name: "Python", icon: <Feather /> },
];

const operationStack = [
    { name: "Java"},
    { name: "Linux"},
    { name: "Docker"},
    { name: "SnowFlakes"},
    { name: "Kubernatives"},
    { name: "CI/CD"},
    { name: "AWS"},
]

const Skills = () => {
    return (
        <div className="mt-12">
            <h2 className="text-center text-3xl font-bold text-gray-100">Skills</h2>
            <p className="text-center text-gray-100 mt-2">A Catalog of Warrior.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-4">
                {developmentStack.map((skill, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center border border-slate-300 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 text-white`}
                    >
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
            <h2 className="text-center text-gray-100 py-4">Still Learning</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 p-4">
                {operationStack.map((skill, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center border border-slate-300 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 text-slate-400`}
                    >
                        <p className="text-lg font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
