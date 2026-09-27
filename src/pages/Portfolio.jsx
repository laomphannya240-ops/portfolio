import Layout from '../components/layout/Layout';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';

export default function Portfolio() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
}