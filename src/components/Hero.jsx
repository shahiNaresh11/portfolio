import React from "react";
import me from "../assets/me.jpg";

const Hero = () => {
    return (
        <section id="home">
            <div className="bg-black min-h-screen text-white text-center py-16 h-100" id="home">
                {/* <img src={pro} alt="" className="mx-auto w-48 rounded-full object-cover transform
            transition-transform duration-300 hover:scale-105" /> */}
                <img src={me} alt="" className=" mt-8 mx-auto w-[200px] h-[205px] rounded-full object-cover aspect-square transform
                   transition-transform duration-300 hover:scale-105" />

                <h1 className="text-4xl font-bold mt-9">
                    I'm
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 "> Naresh Shahi</span>
                    , &nbsp;Front-End developer
                </h1>

                <p className="mt-4 text-lg text-gray-300">
                    I specialize in building modern web applications
                </p>

                <div className="mt-16 space-x-4">
                    <a href="#contact ">
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                            Contact with me
                        </button>
                    </a>
                    <a
                        href="E:\document\my" // Make sure to update this path
                        download="Naresh_Shahi_Resume.pdf" // The file will be downloaded with this name
                    >
                        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
