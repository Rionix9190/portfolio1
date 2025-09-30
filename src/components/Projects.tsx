import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects with real-time collaboration features and priority tracking.',
    technologies: ['React', 'TypeScript', 'Supabase', 'CSS'],
    gradient: 'from-green-500 to-emerald-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather application that provides real-time weather data, forecasts, and visualizations for multiple locations.',
    technologies: ['JavaScript', 'API Integration', 'HTML', 'CSS'],
    gradient: 'from-orange-500 to-amber-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio showcasing projects, skills, and professional experience with modern design.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    gradient: 'from-pink-500 to-rose-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for creating, editing, and publishing blog posts with markdown support and user comments.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-purple-500 to-indigo-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Chat Application',
    description: 'A real-time messaging application with private and group chat features, file sharing, and notification system.',
    technologies: ['React', 'WebSocket', 'Node.js', 'PostgreSQL'],
    gradient: 'from-cyan-500 to-blue-500',
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
          Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-white text-6xl font-bold opacity-50">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
