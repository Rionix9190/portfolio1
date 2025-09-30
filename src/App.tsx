import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, LayoutGrid as Layout, Server } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AS
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#education" className="text-slate-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2025 Ahmad Shoukar. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ahmad.shoukar@example.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
