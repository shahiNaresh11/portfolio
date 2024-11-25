import React from "react";

const Services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly designs.",
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing robust server-side logic and database solutions.",
    },
    {
        id: 4,
        title: "Full-Stack Development",
        description: "Developing robust server-side logic and frontend interfaces.",
    },
    {
        id: 5,
        title: "Content Writing",
        description: "Crafting compelling content for web and marketing.",
    },
    {
        id: 6,
        title: "Digital Marketing",
        description: "Creating effective digital marketing strategies.",
    },
];

const Service = () => {
    return (
        <>
            <section id="service">
                <div className="bg-black text-white py-28" id="service">
                    <div className="container mx-auto px-8 md:px-16 lg:px-24">
                        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> My service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Services.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                                        {service.id}
                                    </div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-gray-300">{service.description}</p>
                                    <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">
                                        Read more
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
