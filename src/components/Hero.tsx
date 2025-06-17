import React, { useEffect, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useParallax } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const scrollY = useParallax();
  
  const dynamicTexts = [
    "Innovative",
    "Passionate Developer",
    "Tech Enthusiast", 
    "Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicTexts.length]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                <span className="inline-block min-w-[300px] text-left">
                  <span
                    key={textIndex}
                    className="inline-block animate-slide-up bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {dynamicTexts[textIndex]}
                  </span>
                </span>
              </p>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-indigo-700 hover:to-cyan-700 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
            >
              <span className="flex items-center space-x-2">
                <span>Get To Know Me</span>
                <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </span>
            </button>
            
            <a 
              href="resume.pdf"
              download="Aryan Singh Thakur Resume.pdf"
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-indigo-400 hover:text-white hover:bg-indigo-400/10 hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <Download className="group-hover:animate-bounce" size={20} />
                <span>Download Resume</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;