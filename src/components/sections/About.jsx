import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gray-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] z-0" />
      
      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Get to know me"
          title="About Me"
          description="A little about my background, skills, and goals"
        />
        
        {/* ប្តូរមកប្រើ max-w-4xl ដើម្បីឱ្យវាលាតចំកណ្តាលស្អាត មិនវែងពេក */}
        <div className="mt-12 max-w-5xl mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            I'm a Computer Science student based in
            <span className="text-blue-400"> Phnom Penh, Cambodia </span>
            🇰🇭
          </h3>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a Year 3 Computer Science student at the Royal University of
            Phnom Penh with a strong interest in Web Development and Software
            Development.
          </p>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            I enjoy building web applications and learning how frontend,
            backend, and databases work together. I have been working with
            technologies such as React, JavaScript, Tailwind CSS, PHP,
            Laravel, and PostgreSQL.
          </p>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            Currently, I am focusing on improving my development skills
            through practical projects and building real-world applications.
            My goal is to become a professional Software Developer and gain
            experience through an internship and real-world projects.
          </p>
          
          {/* Information Grids - ប្តូរទៅជា 4 columns នៅលើ Desktop (md:grid-cols-4) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="border-l-4 border-blue-500 pl-4 bg-white/5 py-4 pr-4 rounded-r-xl backdrop-blur-sm">
              <p className="text-sm text-gray-400">Education</p>
              <p className="text-lg font-semibold text-white mt-1">Computer Science</p>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-4 bg-white/5 py-4 pr-4 rounded-r-xl backdrop-blur-sm">
              <p className="text-sm text-gray-400">University</p>
              <p className="text-lg font-semibold text-white mt-1">RUPP</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 bg-white/5 py-4 pr-4 rounded-r-xl backdrop-blur-sm">
              <p className="text-sm text-gray-400">Current Level</p>
              <p className="text-lg font-semibold text-white mt-1">Year 3</p>
            </div>
            
            <div className="border-l-4 border-cyan-500 pl-4 bg-white/5 py-4 pr-4 rounded-r-xl backdrop-blur-sm">
              <p className="text-sm text-gray-400">Focus</p>
              <p className="text-lg font-semibold text-white mt-1">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}