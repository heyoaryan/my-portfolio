import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-900" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-80 h-80 bg-gradient-to-br from-indigo-500 via-cyan-500 to-teal-500 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-gray-800 rounded-2xl m-2 flex items-center justify-center text-white text-6xl font-bold">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {personalInfo.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing my knowledge through technical writing and mentoring. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends and best practices.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">Let's Connect</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;