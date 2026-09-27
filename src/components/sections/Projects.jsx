import { ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { projects } from '../../data/projects';

// Custom GitHub SVG icon (removed from lucide-react)
const Github = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Recent work"
          title="Featured Projects"
          description="A selection of projects I've built recently"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            // បន្ថែម class "group" សម្រាប់ចាប់ Event ពេល Hover
            <Card key={project.id} className="flex flex-col overflow-hidden !p-0 group">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  // បន្ថែម Hover Animation (Scale រូបភាពឱ្យធំបន្តិច)
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      // កែ Tags ឱ្យទៅជា Glassmorphism ពណ៌ខៀវស្រាល
                      className="text-xs px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-5 pt-4 border-t border-white/10 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}