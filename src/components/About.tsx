import { User, Heart, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl aspect-square flex items-center justify-center text-white shadow-2xl">
              <User size={200} strokeWidth={1} />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Hello! I'm Ahmad Shoukar, a dedicated BCS student at Central Punjab University.
              I'm passionate about software development and constantly exploring new technologies
              to enhance my skills.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              My journey in computer science has equipped me with a strong foundation in programming,
              problem-solving, and analytical thinking. I'm eager to apply my knowledge to real-world
              projects and contribute to innovative solutions.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Passion for Learning</h3>
                  <p className="text-slate-600 text-sm">Continuously expanding my knowledge in software development and emerging technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Target className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Goal-Oriented</h3>
                  <p className="text-slate-600 text-sm">Focused on building a successful career in software engineering and development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Problem Solver</h3>
                  <p className="text-slate-600 text-sm">Enjoy tackling complex challenges and finding creative solutions through code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
