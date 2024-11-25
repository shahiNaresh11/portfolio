import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8odzxio",  // Replace with your EmailJS service ID
                "template_7lfs7se",  // Replace with your EmailJS template ID
                form.current,
                "SvgIHDQM8CEfOb2li"   // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("An error occurred, please try again.");
                }
            );

        e.target.reset(); // Reset form fields after submission
    };

    return (
        <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Let's Talk</h3>
                        <p>I'm open to discussing web development projects or partnership opportunities.</p>
                        <div className="mb-4">
                            <FaEnvelope className="inline-block text-green-400 mr-2" />
                            <a href="mailto:youremail@example.com" className="hover:underline">youremail@example.com</a>
                        </div>
                        <div className="mb-4">
                            <FaPhone className="inline-block text-green-400 mr-2" />
                            <span>+082883993</span>
                        </div>
                        <div className="mb-4">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                            <span>Street, City, Province, Country</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    rows="5"
                                    placeholder="Enter your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
