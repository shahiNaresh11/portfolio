import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isopen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen(!isopen);
    };


    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (


        <nav className='h-24 bg-black  sticky top-0 z-50 '>
            <div className=' absolute left-8 top-8 text-white text-2xl font-bold'> shahi </div>
            <div>
                <button
                    className="absolute top-6 right-6 text-white text-2xl md:hidden"
                    onClick={() => setIsopen(!isopen)}
                >
                    {isopen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <div className='flex  justify-center items-center transition-transform duration-300  '>

                <ul className='hidden  md:flex space-x-7 py-10  text-white text-xl '>

                    <li>
                        <a href="#home"
                            className={`transition duration-300
                             ${activeSection === 'home' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`} >

                            Home
                        </a>
                    </li>


                    <li>
                        <a href="#about"
                            className={`transition duration-300 
                            ${activeSection === 'about' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#service"
                            className={`transition duration-300
                            ${activeSection === 'service' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#project"
                            className={`transition duration-300 
                            ${activeSection === 'project' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`}>
                            Projects
                        </a>
                    </li>


                </ul>
            </div>

            {
                isopen && (
                    <div className='md:hidden'>
                        <ul className=' flex flex-col items-center gap-2  text-white text-xl  bg-black p-4'>
                            <li>
                                <a href="#home"
                                    className={`transition duration-300
                             ${activeSection === 'home' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`} >

                                    Home
                                </a>
                            </li>


                            <li>
                                <a
                                    href="#about"
                                    className={`transition duration-300 ${activeSection === 'about'
                                            ? 'text-white bg-slate-500 p-1 rounded'
                                            : 'hover:text-gray-400 focus:bg-slate-500 focus:p-1 focus:rounded'
                                        }`}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#service"
                                    className={`transition duration-300
                            ${activeSection === 'service' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#project"
                                    className={`transition duration-300 
                            ${activeSection === 'project' ? 'text-white bg-slate-500 p-1 rounded' : 'hover:text-gray-400'}`}>
                                    Projects
                                </a>
                            </li>

                        </ul>

                    </div>
                )
            }

        </nav>
        // <nav className="h-20 bg-black py-4 text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
        //     <div className="container relative flex justify-between items-center md:justify-center">
        //         <div className="text-2xl font-bold left-0">Shahi</div>

        //         {/* Hamburger Menu for Small Screens */}
        //         <div>
        //             <button
        //                 className="absolute top-2 right-4 text-white text-2xl md:hidden"
        //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
        //             >
        //                 {isMenuOpen ? <FiX /> : <FiMenu />}
        //             </button>
        //         </div>
        //       




        //          <div
        //             className={`absolute top-20 left-0 w-full bg-black transition-transform duration-300 md:relative md:flex md:top-0 md:bg-transparent md:justify-center ${isMenuOpen ? 'block' : 'hidden'
        //                 }`}
        //         >
        //             <div className="flex flex-col items-start space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-4 md:p-0">
        //                 <a
        //                     href="#home"
        //                     className={`transition duration-300 ${activeSection === 'home'
        //                         ? 'text-white bg-slate-500 p-1 rounded'
        //                         : 'hover:text-gray-400'
        //                         }`}
        //                 >
        //                     Home
        //                 </a>
        //                 <a
        //                     href="#about"
        //                     className={`transition duration-300 ${activeSection === 'about'
        //                         ? 'text-white bg-slate-500 p-1 rounded'
        //                         : 'hover:text-gray-400'
        //                         }`}
        //                 >
        //                     About Me
        //                 </a>
        //                 <a
        //                     href="#service"
        //                     className={`transition duration-300 ${activeSection === 'service'
        //                         ? 'text-white bg-slate-500 p-1 rounded'
        //                         : 'hover:text-gray-400'
        //                         }`}
        //                 >
        //                     Services
        //                 </a>
        //                 <a
        //                     href="#project"
        //                     className={`transition duration-300 ${activeSection === 'project'
        //                         ? 'text-white bg-slate-500 p-1 rounded'
        //                         : 'hover:text-gray-400'
        //                         }`}
        //                 >
        //                     Projects
        //                 </a>
        //                 <a
        //                     href="#contact"
        //                     className="hidden md:inline"
        //                 >
        //                     <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
        //                         Connect Me
        //                     </button>
        //                 </a>
        //             </div>
        //         </div> */}
        //     </div>
        // </nav>
    );
};

export default Navbar;
