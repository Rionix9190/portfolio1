import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={32} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Bachelor of Computer Science (BCS)
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  University of Central Punjab
                </p>
                <p className="text-slate-600 mb-4">
                  Currently Pursuing
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Studying core computer science subjects including data structures, algorithms,
                  software engineering, database systems, web development, and computer networks.
                  Actively engaged in practical projects and hands-on learning experiences.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Key Coursework</p>
                      <p className="text-sm text-slate-600">Data Structures, Algorithms, OOP, Database Systems, Web Development</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-cyan-600" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Focus Areas</p>
                      <p className="text-sm text-slate-600">Software Development, Web Technologies, Problem Solving</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Academic Excellence</h4>
              <p className="text-slate-600 text-sm">Committed to achieving strong academic performance</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Practical Learning</h4>
              <p className="text-slate-600 text-sm">Focus on hands-on projects and real applications</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Continuous Growth</h4>
              <p className="text-slate-600 text-sm">Always learning and expanding skill set</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
