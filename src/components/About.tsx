import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Frontend Development', level: 95, color: 'from-cyan-400 to-blue-500' },
    { name: 'Backend Development', level: 90, color: 'from-purple-400 to-pink-500' },
    { name: 'Cloud Architecture', level: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'DevOps & CI/CD', level: 80, color: 'from-orange-400 to-red-500' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading development of cutting-edge web applications',
      icon: Code,
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built scalable applications serving 100k+ users',
      icon: Zap,
    },
    {
      year: '2020',
      title: 'Computer Science Graduate',
      company: 'University of Technology',
      description: 'Graduated with honors, specializing in software engineering',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            About<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate about creating digital experiences that blend creativity with functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Bio */}
          <div className={`space-y-6 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-25" />
              <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With over 4 years of experience in full-stack development, I specialize in creating 
                  immersive digital experiences that push the boundaries of what's possible on the web.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of clean code, beautiful design, and seamless user experiences. 
                  When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: inView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className={`space-y-8 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Timeline</h3>
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative flex items-start space-x-4 group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <item.icon className="text-black" size={20} />
                </div>
                <div className="flex-grow">
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 group-hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-cyan-400 font-mono text-sm">{item.year}</span>
                      <Calendar size={16} className="text-gray-500" />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-purple-400 text-sm mb-2">{item.company}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
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

export default About;