
import pokemon from "../assets/poke.png"
import todo from "../assets/to.png"
import family from "../assets/fam.png"
const Projectes = [
    {
        id: 1,
        name: "Family Management ",
        image: family,
        technologies: "React & strapi",
        github: "https://github.com/shahiNaresh11/project.git"
    },
    {
        id: 1,
        name: "TO DO",
        image: todo,
        technologies: "React",
        github: "https://github.com/shahiNaresh11/Todo-react.git"
    },
    {
        id: 1,
        name: "Pokemon",
        image: pokemon,
        technologies: "React",
        github: "https://github.com/shahiNaresh11/Pokemon.git"
    }
];


const Project = () => {
    return (
        <>
            <section id="project">
                <div className=" bg-black text-white py-20 " id="project">
                    <div className="container mx-auto px-8 md:px-16 lg:px-24">
                        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">My Projects </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Projectes.map((Project) => (
                                <div key={Project.id} className="bg-gray-800 p-6 rounded-lg  hover:shadow-lg transform transition-transform duration-300 hover:scale-105 ">
                                    <img src={Project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                    <h3 className="text-2xl font-bold mb-2 ">{Project.name}  </h3>
                                    <p className="text-gray-400 mb-4 ">{Project.technologies}</p>
                                    <a href={Project.github} className="inline-block bg-gradient-to-r from-green-400 to blue-500 text-white px-6 py-2 rounded-full " target="_blank" rel="noopener noreferrer">github</a>

                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;