import React from 'react';
import { Trophy, Award, Star, Users, Calendar } from 'lucide-react';
import { achievements } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const categoryIcons = {
    hackathon: <Trophy size={24} />,
    academic: <Award size={24} />,
    competition: <Star size={24} />,
    certification: <Award size={24} />
  };

  const categoryColors = {
    hackathon: 'from-yellow-500 to-orange-500',
    academic: 'from-blue-500 to-indigo-500',
    competition: 'from-purple-500 to-pink-500',
    certification: 'from-green-500 to-teal-500'
  };

  const categoryNames = {
    hackathon: 'Hackathon',
    academic: 'Academic',
    competition: 'Competition',
    certification: 'Certification'
  };

  return (
    <section id="achievements" className="py-20 bg-gray-900" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Recognition and accomplishments that showcase my dedication and skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${categoryColors[achievement.category]} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {categoryIcons[achievement.category]}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[achievement.category]} text-white`}>
                        {categoryNames[achievement.category]}
                      </span>
                    </div>
                    
                    <h4 className="text-indigo-400 font-semibold mb-3">{achievement.organization}</h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{achievement.year}</span>
                      </div>
                      
                      {achievement.rank && (
                        <div className="flex items-center space-x-1">
                          <Trophy size={14} />
                          <span>{achievement.rank}</span>
                        </div>
                      )}
                      
                      {achievement.participants && (
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{achievement.participants} participants</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;