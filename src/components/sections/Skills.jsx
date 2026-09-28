import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B0F19] relative overflow-hidden">
      <div className="container-custom relative z-10 mx-auto px-4 md:px-8">
        
        <SectionTitle
          subtitle="Technologies I Master"
          title="MY SKILLS"
        />

        {/* ប្រើ Grid 3 ជួរសម្រាប់ Desktop ដូចក្នុងរូបភាព */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-16 max-w-6xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon;
            
            return (
              <div key={skill.name} className="flex items-center gap-5">
                
                {/* ផ្នែកខាងឆ្វេង: Icon (ប្រើពណ៌ដើមរបស់ Icon ប្រសិនបើមាន) */}
                {Icon && (
                  <div className="flex-shrink-0">
                   <Icon className={`w-10 h-10 md:w-12 md:h-12 ${skill.color || 'text-white'}`} />
                  </div>
                )}
                
                {/* ផ្នែកខាងស្តាំ: ឈ្មោះ ភាគរយ និង Progress Bar */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white text-base">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Background របស់ Progress bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    {/* ខ្សែពណ៌ស្វាយរបស់ Progress Bar */}
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}