import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">Samuel Ramírez</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Founder of Velo Blanco | Building AI solutions & news transparency
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            View Projects
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-border text-foreground hover:bg-accent px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            Contact Me
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;