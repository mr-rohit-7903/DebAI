import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero.json";
import aboutAnimation from "../assets/DebAI.json";
import Header from "../components/Header";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-[#b5bfff] font-sans text-gray-800">
      
      <Header/>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 md:py-[-10] ">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Debate Smarter with <span className="text-indigo-600">DebAI</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Your AI-powered debate judge. Score arguments, get constructive feedback, and enhance your debating skills.
          </p>
          <a 
            href="#start"
            className="inline-block mt-4 px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-500 transition"
          >
            Start Debating
          </a>
        </div>

        {/* Hero Lottie Animation */}
        <div className=" h-50 md:w-1/2 mb-3 md:mb-0 flex justify-center">
          <Lottie 
            animationData={heroAnimation} 
            loop={true} 
            className="w-150 h-130 md:w-126 md:h-126"
          />
        </div>
      </section>

      {/* About DebAI */}
      <section id="about" className="bg-white py-24 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Lottie Animation */}
        <div className="md:w-1/3 w-full mb-12 md:mb-0 flex ">
          <Lottie 
            animationData={aboutAnimation} 
            loop={true} 
            className="w-80 md:w-105" // adjust size
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
          <h3 className="text-3xl font-bold mb-4">Meet DebAI</h3>
          <p className="text-gray-600 text-lg">
            DebAI is built with state-of-the-art AI algorithms to provide objective and constructive feedback for debates. 
            It evaluates clarity, logic, and persuasiveness, helping you improve with every round.
          </p>
        </div>
      </div>
    </section>

    </div>
  );
}
