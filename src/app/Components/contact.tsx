"use client"
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdSend } from 'react-icons/md'; 

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center" data-aos="fade-left">
          <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </p>
        </div>
        <div
          className="mt-10 max-w-lg mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
          data-aos="zoom-in"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-6">
            <div data-aos="fade-up">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-700 py-2"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-1 w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-700 py-2"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="mt-1 w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-700 py-2 resize-none"
                required
              ></textarea>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-6 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg transition duration-300"
              >
               
                Send Message  <MdSend className="ml-2" /> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
