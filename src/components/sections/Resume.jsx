import { Download, Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Card from '../ui/Card';

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of web applications using React and Node.js.',
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Inc.',
    period: '2020 - 2022',
    description: 'Built responsive UIs and improved application performance by 40%.',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    period: '2016 - 2020',
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="My journey"
          title="Resume / CV"
          description="My professional experience and education"
        />

        <div className="flex justify-center mb-12">
          <Button href="/resume.pdf" size="lg" download>
            <Download size={20} />
            Download Resume
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-100 rounded-lg">
                <Briefcase className="text-blue-600" size={22} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((item, i) => (
                <Card key={i}>
                  <span className="text-sm text-blue-600 font-semibold">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">
                    {item.role}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={22} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <Card key={i}>
                  <span className="text-sm text-blue-600 font-semibold">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium">
                    {item.school}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}