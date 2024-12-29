"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiAdobexd } from "react-icons/si";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  const skills = [

    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: "Responsive Design", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "UI/UX Design", icon: <SiAdobexd className="text-pink-500 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center" data-aos="fade-up">

          
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide text-[25px] uppercase">Skills</h2>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center text-gray-800 font-medium hover:shadow-lg transition-shadow duration-300"
                data-aos="zoom-in"
              >

                {skill.icon}
                <span className="mt-4 text-lg">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>


      </div>


    </section>
  );
}
