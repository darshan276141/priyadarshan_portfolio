
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
                            <a href="https://github.com/darshan276141/code_reviewer" 
                             className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                             target="_blank" rel="noopener noreferrer">
                                View Project →
                            </a>

                        </div>
                    </div>
                    
                     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Filter-Syn</h3>
                        <p className="text-gray-400 mb-4"> 
                            Developed a VScode extension, Filter-Syn, that utilizes AI to help users to remove unused dead code
                            and optimize their codebase for better performance and maintainability. Supports multiple programming languages.(Javascript, Python, Typescript)
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "AST parsing", "Python", "Machine Learning ", "Javascript", " libcst"].map((tech, key)=> (
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
                            <a href="https://marketplace.visualstudio.com/items?itemName=PriyadarshanKarnati.filter-syn" 
                             className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                             target="_blank" rel="noopener noreferrer">
                                Download Here →
                            </a>
                            <a href="https://github.com/darshan276141/filter-syntax" 
                             className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                             target="_blank" rel="noopener noreferrer">
                                Github Repo →
                            </a>

                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Muscle_brain </h3>
                        <p className="text-gray-400 mb-4"> 
                           Developed Muscle_Brain, a web platform that explains fitness concepts and muscle growth mechanisms with interactive
                            visualizations, enhancing user understanding of workout science
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
                            <a href="https://muscle-brain.vercel.app/" 
                             className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                             target="_blank" rel="noopener noreferrer">
                                View Project →
                            </a>

                        </div>
                       
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[(0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Resumaster</h3>
                        <p className="text-gray-400 mb-4"> 
                        Created Resumaster, an AI-driven platform that enhances resume quality by providing automated analysis and improvement recommendations,
                         helping users increase job interview success rates.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "Puter.js", "TailwindCSS", "Javascript", "Claude API", ].map((tech, key)=> (
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
                            <a href="https://resume-master-delta.vercel.app/" 
                             className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                             target="_blank" rel="noopener noreferrer">
                                View Project →
                            </a>

                        </div>
                        
                    </div>


                </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};