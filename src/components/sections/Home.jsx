import { ArrowDown, Mail } from 'lucide-react';
import Button from '../ui/Button';
import TypingText from '../../styles/TypingText';

export default function Home() {
  return (
    <section
      id="home"
      // ប្តូរមកប្រើ bg-gray-950 ដើម្បីអោយដូច About Page
      className="min-h-screen flex items-center relative overflow-hidden bg-gray-950"
    >
      {/* Background Glow ដូច About Page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center px-6 mx-auto">
        {/* Left: Text */}
        <div className="text-center md:text-left animate-slide-up">
          {/* Glassmorphism Badge */}
          <span className="text-xl md:text-2xl lg:text-3xl inline-block text-sm font-semibold text-blue-300 bg-blue-900/40 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            Hello, I'm
          </span>
          
          {/* ពណ៌អក្សរឈ្មោះ (Gradient ភ្លឺលើផ្ទៃងងឹត) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              <TypingText text="Laom Phannya" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
            Full-Stack Developer crafting beautiful &amp; functional web experiences
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            {/* Outline button អោយស៊ីជាមួយផ្ទៃងងឹត */}
            <Button href="#contact" variant="outline" size="lg" className="border-gray-500 text-gray-200 hover:bg-white/10">
              <Mail size={20} />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative animate-float">
            {/* Glow Effect ជុំវិញរូបភាព */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 scale-105 animate-glow-pulse" />
            <img
              src="/images/yanobg.png"
              alt="Laom Phannya"
              // បន្ថែម Border ពណ៌សព្រាលៗ និង Shadow អោយរូបភាពកាន់តែលេចធ្លោ
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-[0_0_40px_rgba(79,70,229,0.3)] border-4 border-white/10 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}