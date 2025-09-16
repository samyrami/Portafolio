import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
