import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { skills } from '../../data/skills';

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="What I know"
          title="Skills & Expertise"
          description="Technologies and tools I work with on a daily basis"
        />

        <div className="space-y-12 mt-12 ">
          {categories.map((category) => (
            <div key={category} className="animate-slide-up ">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3">
                {category}
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => {
                    // ទាញយក Icon ពី Data មកប្រើជា Component
                    const Icon = skill.icon;
                    
                    return (
                      <Card key={skill.name}>
                        <div className="flex justify-between items-center mb-3 ">
                          
                          {/* ផ្នែកខាងឆ្វេងមាន Icon និង ឈ្មោះ */}
                          <div className="flex items-center gap-3">
                            {/* បើមាន Icon នោះវានឹងបង្ហាញនៅទីនេះ */}
                            {Icon && (
                              <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            )}
                            <span className="font-medium text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* ភាគរយ */}
                          <span className="text-sm text-blue-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)] relative"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/30 blur-[2px]" />
                          </div>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}