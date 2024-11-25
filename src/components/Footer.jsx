import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                {/* <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
                    <div className=" flex-1 mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Shahi</h3>
                        <p className="text-gray-400">
                            Full stack Development based in the USA, specializing in web and software development
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="flex items-center justify-center">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full p-2 rounded-l-lg bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div> */}


                <div className=" pb-4 border-t border-gray-600 pt-10  flex flex-col md:flex-row justify-between items-center ">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Shahi. All right reserved.
                    </p>
                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="" className="text-gray-400 hover:text-white">
                            <FaFacebook size={"20px"} />
                        </a>
                        <a href="" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={"20px"} />
                        </a>
                        <a href="" className="text-gray-400 hover:text-white">
                            <FaTwitter size={"20px"} />
                        </a>
                        <a href="" className="text-gray-400 hover:text-white">
                            <FaGithub size={"20px"} />
                        </a>
                    </div>

                    <div className="flex space-x-4">
                        <a href="" className="text-gray-400 hover:text-white">
                            Privacy
                        </a>
                        <a href="" className="text-gray-400 hover:text-white">
                            Terms of Services
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
