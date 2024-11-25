import me from "../assets/me.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";

const About = () => {
    const skills = [
        { icon: <FaHtml5 className="text-orange-500 text-4xl" />, title: "HTML", description: "Semantic and clean markup" },
        { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, title: "CSS", description: "Responsive and modern designs" },
        { icon: <FaPhp className="text-indigo-500 text-4xl" />, title: "PHP", description: "Server-side scripting" },
        { icon: <FaReact className="text-blue-400 text-4xl" />, title: "React JS", description: "Dynamic single-page apps" },
        { icon: <FaNodeJs className="text-green-500 text-4xl" />, title: "Node JS", description: "Scalable backend services" },
        { icon: <FaDatabase className="text-green-600 text-4xl" />, title: "MongoDB", description: "NoSQL database for scalable applications" },
    ];

    return (
        <>
            <section id="about">
                <div className="bg-black text-white " id="about">
                    <div className="container mx-auto px-8 md:px-16 lg:px-24">
                        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            About Me
                        </h2>
                        <div className="flex flex-col md:flex-row items-center md:space-x-12">
                            <div className="relative mb-8 md:mb-0">
                                <img
                                    src={me}
                                    alt="Profile"
                                    className="w-80  h-96 mt-10 rounded-lg object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0  rounded-lg"></div>
                            </div>
                            <div className="flex-1">
                                <p className="text-lg leading-relaxed mb-8">
                                    I am a passionate <span className="font-bold text-green-400">full-stack developer</span> focused on building
                                    modern and responsive web applications. With a strong foundation in both frontend and backend technologies,
                                    I strive to create seamless and efficient user experiences while continuously learning and improving my craft.
                                </p>
                                <h3 className="text-3xl  font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
                                    My Skills
                                </h3>

                                {/* Parent container for the skills section with a border */}
                                <div className="border-4 border-gray-800 p-6 rounded-lg">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-800 border border-gray-600 rounded-lg p-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 group"
                                            >
                                                <div className="flex justify-center mb-4">
                                                    <div className="group-hover:scale-110 transition-transform">{skill.icon}</div>
                                                </div>
                                                <h4 className="text-xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                                    {skill.title}
                                                </h4>
                                                <p className="text-sm text-center text-gray-400">{skill.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 flex justify-evenly text-center">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                            2+
                                        </h3>
                                        <p className="text-gray-300">Years Experience</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                            10+
                                        </h3>
                                        <p className="text-gray-300">Projects Completed</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                            2+
                                        </h3>
                                        <p className="text-gray-300">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
