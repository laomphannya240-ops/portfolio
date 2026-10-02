import { Download, Briefcase, GraduationCap, View, ViewIcon } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Card from "../ui/Card";

const experience = [
  {
    role: "Web Development Intern",
    company: "Internship",
    period: "2026",
    description:
      "Worked on frontend development and learned practical web development workflows, GitHub, teamwork, and collaborative problem-solving.",
  },
  {
    role: "Web Development Projects",
    company: "Personal & Academic Projects",
    period: "2025 - Present",
    description:
      "Built web projects using HTML, CSS, JavaScript, React, Tailwind CSS, PHP, Laravel, REST APIs, and databases.",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Royal University of Phnom Penh (RUPP)",
    period: "2025 - Present",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 md:py-28 bg-gray-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="My journey"
          title="Resume / CV"
          description="My education, experience, and web development journey"
        />

        <div className="flex justify-center mt-8 mb-16">
          <Button
            href="pdf/mycv.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <ViewIcon size={20} />
            View Resume
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Experience */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl backdrop-blur-sm">
                <Briefcase className="text-blue-400" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, i) => (
                <Card key={i}>
                  <span className="text-sm text-blue-400 font-semibold tracking-wide">
                    {item.period}
                  </span>

                  <h4 className="text-xl font-bold text-white mt-2 mb-1">
                    {item.role}
                  </h4>

                  <p className="text-gray-400 text-sm font-medium mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                <GraduationCap className="text-purple-400" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, i) => (
                <Card key={i}>
                  <span className="text-sm text-purple-400 font-semibold tracking-wide">
                    {item.period}
                  </span>

                  <h4 className="text-xl font-bold text-white mt-2 mb-1">
                    {item.degree}
                  </h4>

                  <p className="text-gray-400 text-sm font-medium">
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
