"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
useEffect(() => {
  
  AOS.init({duration:1000});
})
  
  return (
    <section id="about" className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
         
          <div  data-aos="fade-right">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase text-[25px]">
              About Me
            </h2>
           
            <p className="mt-4 text-lg text-gray-600">
              I'm a passionate web developer with a strong focus on design and user experience. 
              With over 1+ years of front-end development experience, I specialize in creating 
              intuitive, responsive, and efficient web applications that bring ideas to life.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              My journey in web development started with a fascination for how websites work, 
              and it has grown into a full-fledged career where I combine creativity and 
              technical expertise to deliver exceptional results.
            </p>
          </div>

        
          <div className="flex justify-center lg:justify-end">
            <div  data-aos="fade-left" className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg bg-gradient-to-tr from-indigo-500 to-purple-600">
              <img 
                src="https://deanagar.com.au/wp-content/uploads/2021/07/054-men-photography.jpg?height=400&width=400"
                alt="About Me"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

       
       
      </div>
    </section>
  );
}
