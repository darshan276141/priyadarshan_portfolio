import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (<section
             id="projects"  
             className= "min-h-screen flex items-center justify-center py-20">
                <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
             <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                   Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">DeepSeek Clone</h3>
                        <p className="text-gray-400 mb-4"> 
                            Developed a DeepSeek clone using Next.js and TypeScript, implementing server-side rendering
                            (SSR) for improved performance 
                            and type safety for better maintainability.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "NextJs", "Typescript", "Vercel", "Clerk"].map((tech, key)=> (
                                <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition
                                "
                                    >
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://deepseek-iota-opal.vercel.app/"  className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project  → </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Code Reviewer</h3>
                        <p className="text-gray-400 mb-4"> 
                            Developed an AI-powered code reviewer using Gemini API and MERN stack to analyze and provide
                            real-time feedback on code quality, syntax, and best practices.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "MongoDB", "Expressjs", "Reactjs", "Node.js", "Gemini API"].map((tech, key)=> (
                                <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition
                                "
                                    >
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project  → </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Library App </h3>
                        <p className="text-gray-400 mb-4"> 
                            Developed a full-stack web application to manage and organize a personal book collection with
                            features like adding, editing, and deleting books. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "MongoDB" ,"Expressjs", "React js"," Node.js" ].map((tech, key)=> (
                                <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition
                                "
                                    >
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project  → </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Text to Speech Convertor</h3>
                        <p className="text-gray-400 mb-4"> 
                        Developed a text-to-speech converter application using Windows Speech Recognition,
                        enabling users to convert written text into speech with real-time voice output.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "Html", "CSS", "Javascript", "Windows Speech Recognition", ].map((tech, key)=> (
                                <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition
                                "
                                    >
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project  → </a>
                        </div>
                    </div>


                </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};