import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<null | any>(null);

  const projects = [
    {
      id: 1,
      title: 'StudyNotion',
      description: 'An ed-tech platform with secure authentication and course purchase system built using the MERN stack.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/AfrozSheikh/studynotion',
      live: 'https://studynotion-jade.vercel.app/',
      featured: true,
    },
    {
      id: 2,
      title: 'KrushiMitra',
      description: 'AI-based crop recommendation system using soil data, geolocation, and weather forecasting.',
      image: 'https://images.pexels.com/photos/6231641/pexels-photo-6231641.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Node.js', 'Gemini AI', 'MongoDB', 'OpenWeatherMap API'],
      github: 'https://github.com/AfrozSheikh/krushimitra',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'SignVerse',
      description: 'Real-time ASL recognition web app that converts hand gestures into text and speech.',
      image: 'https://images.pexels.com/photos/4144095/pexels-photo-4144095.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flask', 'MediaPipe', 'Random Forest', 'OpenCV', 'Tailwind CSS'],
      github: 'https://github.com/AfrozSheikh/signverse',
      live: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio to showcase projects, resume, and contact information using modern animations.',
      image: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/AfrozSheikh/portfolio',
      live: 'https://afroz-portfolio.vercel.app/',
      featured: false,
    },
  ];
  

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Projects<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing innovative solutions and cutting-edge implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'} interactive`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-400/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-cyan-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Links</h4>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={20} />
                        <span>View Source Code</span>
                      </a>
                      <a
                        href={selectedProject.live}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;