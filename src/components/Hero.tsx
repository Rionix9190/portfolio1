import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
            AS
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
          Ahmad Shoukar
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-4">
          BCS Student at Central Punjab University
        </p>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
          Aspiring Software Developer | Passionate about Technology & Innovation
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="mailto:ahmad.shoukar@example.com" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
