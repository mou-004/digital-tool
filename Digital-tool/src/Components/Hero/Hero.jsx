
import React from "react";
import hero from "../../assets/banner.png";
import { FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f9f9ff] to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">

  
        <div className="flex-1">

      
          <div className="inline-flex items-center gap-2 bg-[#EEF2FF] px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8E2DE2]"></div>
            <p className="text-sm text-[#6B7280] font-medium">
              New: AI-Powered Tools Available
            </p>
          </div>

         
          <h1 className="mt-6 font-extrabold leading-[1.1] text-[#101727] 
          text-3xl md:text-5xl lg:text-5xl xl:text-5xl">
            Supercharge Your <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#8E2DE2] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

        
          <p className="mt-5 text-[#6B7280] text-base md:text-lg max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—
            all in one place. Start creating faster today.
          </p>

         
          <div className="flex items-center gap-4 mt-6">

         
            <button className="px-6 py-3 rounded-full text-white font-semibold 
            bg-gradient-to-r from-[#4F39F6] via-[#7C3AED] to-[#9514FA] 
            bg-[length:200%_200%] 
            transition-all duration-500 
            hover:bg-right hover:scale-105 
            hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] 
            active:scale-95">
              Explore Products
            </button>

           
            <button className="flex items-center gap-2 px-5 py-3 
            border border-purple-600 rounded-full 
            text-purple-600 font-semibold 
            transition-all duration-300 
            hover:bg-purple-600 hover:text-white 
            hover:scale-105 hover:shadow-md 
            active:scale-95">
              <FiPlay className="text-lg" />
              Watch Demo
            </button>

          </div>
        </div>

       
        <div className="flex-1 w-full">
          <div className="bg-gray-100 rounded-2xl p-4 shadow-sm">
            <img
              src={hero}
              alt="hero"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;