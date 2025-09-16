import { GraduationCap, Lightbulb, Trophy, BookOpen, Globe, Rocket, Brain, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Founder of Velo Blanco",
      description: "Building a platform for neutral news analysis and research to combat misinformation and promote transparency."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Research & Consulting",
      description: "Leading AI consultant at Universidad de La Sabana and GOVLAB, driving innovation in academic and government sectors."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Deep Learning Educator",
      description: "Creating comprehensive course content for TensorFlow, Keras, and Hugging Face, educating the next generation of AI practitioners."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Champion",
      description: "Winner of 2 hackathons, including a recent top 3 finish, demonstrating rapid prototyping and problem-solving skills."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Research Innovation",
      description: "Upcoming research paper on mapping quantum computing principles to classical deep learning algorithms."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Communication",
      description: "IELTS 6.5 score enabling effective international collaboration and communication in English."
    }
  ];

  const experience = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Former leader of ISEE (Innovation and Entrepreneurship group), fostering innovation culture and technical excellence."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI Research Group",
      description: "Founder and leader of an AI research group (semillero de IA), driving cutting-edge research and development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm an AI consultant, researcher, and startup founder from Bogotá, Colombia, 
            passionate about leveraging artificial intelligence to solve real-world problems 
            and build a more transparent future.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 bg-muted/50 border border-border hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;