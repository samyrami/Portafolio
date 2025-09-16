import { ExternalLink, Eye, Github, Globe, Bot, Shield, Database, BarChart3, Leaf, Building, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Velo Blanco",
      description: "Platform for neutral news analysis and research, leveraging AI to provide unbiased news insights and transparency. Advanced news analysis system using machine learning to detect bias and provide comprehensive reporting.",
      image: "/Images/VeloBlanco.jpeg",
      icon: <Globe className="w-6 h-6" />,
      demoUrl: "https://veloblanco.news/",
      codeUrl: "#", // Add GitHub URL when available
      tech: ["AI", "News Analysis", "Machine Learning", "Next.js"],
      featured: true
    },
    {
      title: "Lavado de Manos - Instituto Cancerologico",
      description: "AI-powered object detection system, developed with the Instituto Nacional de Cancerología, to monitor handwashing at ICU entrances and protect oncology patients from infection. Born from a hackathon, now in active use.",
      image: "/Images/INC.png",
      icon: <Heart className="w-6 h-6" />,
      demoUrl: "https://www.youtube.com/watch?v=U3cwZligvb4",
      codeUrl: "https://github.com/Tommybg/Instituto_cancerologico_lavadodemanos",
      tech: ["Computer Vision", "Object Detection", "TensorFlow", "OpenCV"]
    },
    {
      title: "ConvergenceLab",
      description: "Research and collaboration platform for innovation, connecting researchers and facilitating project collaboration across different disciplines and institutions.",
      image: "/Images/ConvergenceLab.png",
      icon: <Database className="w-6 h-6" />,
      demoUrl: "https://convergencelab.up.railway.app/",
      codeUrl: "https://github.com/samyrami/ConvergenceLAb",
      tech: ["Research", "Collaboration", "AI", "Academia"]
    },
    {
      title: "DataCopilot",
      description: "Advanced data analysis and visualization platform with machine learning capabilities for business insights and predictive analytics.",
      image: "/Images/DataCopilot.png",
      icon: <BarChart3 className="w-6 h-6" />,
      demoUrl: "https://datacopilot.up.railway.app/",
      codeUrl: "https://github.com/Tommybg/data_copilot",
      tech: ["Data Science", "ML", "Visualization", "Analytics"]
    },
    {
      title: "ExportaCheck",
      description: "AI-powered bot to simplify export processes for businesses, automating complex procedures and documentation for international trade.",
      image: "/Images/ExportaCheck.png",
      icon: <Bot className="w-6 h-6" />,
      demoUrl: "https://exporta-facil-bot-production.up.railway.app/",
      codeUrl: "https://github.com/samyrami/exporta-facil-bot",
      tech: ["AI", "NLP", "Automation", "Business"]
    },
    {
      title: "Founder Aid",
      description: "Startup assistance platform providing resources, mentorship, and tools for entrepreneurs and founders to build successful companies.",
      image: "/Images/FounderAid.png",
      icon: <Users className="w-6 h-6" />,
      demoUrl: "https://founderaid.webelopers.io/",
      codeUrl: "#",
      tech: ["Startups", "Mentorship", "Entrepreneurship", "Community"]
    },
    {
      title: "PoliciApp Eco",
      description: "Environmental monitoring and compliance platform for environmental law enforcement and tracking of ecological violations.",
      image: "/Images/PoliciApp-Eco.png",
      icon: <Leaf className="w-6 h-6" />,
      demoUrl: "https://policiaambiental-production.up.railway.app/",
      codeUrl: "https://github.com/samyrami/Policia_ambiental",
      tech: ["Environmental", "Monitoring", "Government", "GIS"]
    },
    {
      title: "PoliciApp Tránsito",
      description: "Traffic management application for law enforcement with real-time incident tracking and reporting systems for urban mobility.",
      image: "/Images/PoliciApp.png",
      icon: <Shield className="w-6 h-6" />,
      demoUrl: "https://policiapp-transito.up.railway.app/",
      codeUrl: "https://github.com/samyrami/Police_asistant",
      tech: ["Full-stack", "React", "Java", "Government"]
    },
    {
      title: "Sentir Santander",
      description: "Regional government platform for citizen engagement and public service management in Santander, facilitating communication between citizens and government.",
      image: "/Images/Santander-Gober.png",
      icon: <Building className="w-6 h-6" />,
      demoUrl: "https://santander-production.up.railway.app/",
      codeUrl: "https://github.com/samyrami/Santander",
      tech: ["Government", "Citizen Services", "React", "Public Sector"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with care and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-contain bg-slate-100 dark:bg-slate-700 transition-transform duration-300 group-hover:scale-105 ${
                    project.featured ? 'h-80 md:h-96' : 'h-64'
                  }`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.innerHTML = '<div class="text-slate-400">Image not found</div>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                  
                  {project.codeUrl && project.codeUrl !== "#" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                      asChild
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                      disabled
                    >
                      <Github className="w-4 h-4" />
                      Private
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;