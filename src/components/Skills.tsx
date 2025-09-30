import { Code, Database, LayoutGrid as Layout, Server, Globe, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-blue-500 to-blue-600',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-green-500 to-green-600',
    skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Server Management']
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-purple-500 to-purple-600',
    skills: ['SQL', 'PostgreSQL', 'Database Design', 'Query Optimization']
  },
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-orange-500 to-orange-600',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Tools & Technologies',
    icon: GitBranch,
    color: 'from-cyan-500 to-cyan-600',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Command Line']
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'from-pink-500 to-pink-600',
    skills: ['HTTP/HTTPS', 'REST', 'JSON', 'Web Security', 'Performance Optimization']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
