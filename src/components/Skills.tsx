import { Brain, Database, Code, MessageSquare, Cloud, Cpu, Globe, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        "TensorFlow", "Keras", "PyTorch", "Hugging Face", 
        "FAISS", "Deep Learning", "NLP", "Computer Vision"
      ]
    },
    {
      title: "Full-stack Development",
      icon: <Code className="w-8 h-8" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        "Python", "Java (Spring Boot)", "React", "TypeScript", 
        "FastAPI", "Streamlit", "REST APIs", "Next.js"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        "AWS RDS", "Oracle Cloud", "Railway", "Docker", 
        "Database Administration", "Model Deployment", "CI/CD", "Microservices"
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-8 h-8" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        "SQL", "dbt", "Data Engineering", "ETL", 
        "Data Visualization", "Statistical Analysis", "Big Data", "Data Pipelines"
      ]
    },
    {
      title: "Communication & Leadership",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      skills: [
        "Teaching", "Technical Writing", "Workshops", "Hackathons", 
        "Research", "Consulting", "Team Leadership", "Mentoring"
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Zap className="w-8 h-8" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      skills: [
        "Quantum Computing Research", "Edge AI", "MLOps", "AutoML", 
        "Federated Learning", "Neural Architecture Search", "AI Ethics", "Explainable AI"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building AI solutions, from research to production deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-muted/70 text-muted-foreground px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;