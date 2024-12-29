"use client"

import { useEffect } from 'react';

import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hero(){
  
  useEffect(()=>{
    
    AOS.init({duration:1000});
  
  },[]);
  
  return(
  
  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
    
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8" data-aos="fade-left">
      
      <div className="lg:flex lg:items-center lg:justify-between">
        
        <div className="lg:w-1/2" data-aos="fade-right">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold" data-aos="fade-right">
  Hi, I'm{" "}
  <span className="text-white" data-aos="fade-right">
    <span className="text-4xl sm:text-5xl md:text-6xl text-white">&lt; </span>
    Majeed
  </span>
  <span className="text-3xl sm:text-5xl md:text-6xl"> / </span>
  <span className="text-4xl sm:text-5xl md:text-6xl">&gt; </span>
</h1>

        
        <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl" data-aos="fade-right">Web Developer & Designer</p>
        
        <div className="mt-10">
          
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10" data-aos="fade-right">Get in touch</a>
          
          </div></div>
          
          <div className="mt-10 lg:mt-0 lg:w-1/2" data-aos="fade-left">
          
          
          <img src="https://deanagar.com.au/wp-content/uploads/2021/07/054-men-photography.jpg?height=400&width=400" alt="Your Name" width={400} height={400} className="rounded-full mx-auto shadow-lg"/>
          
          
          </div>
          
          </div>
          
          </div>
          
          </div>);}
