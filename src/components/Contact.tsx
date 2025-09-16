import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Personal Email",
      value: "serr73094@gmail.com",
      href: "mailto:serr73094@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Company Email",
      value: "sam@morphelabs.dev",
      href: "mailto:sam@morphelabs.dev",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/samyrami",
      href: "https://github.com/samyrami",
      color: "text-gray-500",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "samuel-ramirez-developer",
      href: "https://www.linkedin.com/in/samuel-ramirez-developer/",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bogotá, Colombia",
      href: null,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on AI solutions or discuss innovative projects? 
            Get in touch through any of these channels.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((contact, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center space-y-4 group h-full"
                  >
                    <div className={`w-16 h-16 ${contact.bgColor} rounded-xl flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform duration-200`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors break-all">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center space-y-4 h-full">
                    <div className={`w-16 h-16 ${contact.bgColor} rounded-xl flex items-center justify-center ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </div>
                      <div className="text-foreground font-medium break-all">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Samuel Ramírez. Building the future with AI & transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;