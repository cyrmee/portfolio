import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Cloud, 
  Database, 
  Code, 
  Award,
  MapPin,
  Calendar
} from "lucide-react";

const About = () => {
  const skills = [
    "C#", ".NET", "TypeScript", "Python", "Java", "NestJS", "GraphQL",
    "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis"
  ];

  const highlights = [
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Backend Systems",
      description: "Architecting scalable backend solutions with modern frameworks and cloud technologies"
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Solutions",
      description: "AWS & Azure certified with hands-on experience deploying production systems"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Engineering",
      description: "Optimizing database performance and building efficient data pipelines"
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "AI Integration",
      description: "Implementing AI-powered features and semantic search solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A results-driven backend engineer passionate about building robust, scalable systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Overview</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a backend engineer with over 2 years of experience building enterprise-grade 
                  applications and cloud-native solutions. My expertise spans across multiple programming 
                  languages and cloud platforms, with a focus on creating efficient, maintainable systems.
                </p>
                <p>
                  Currently working at Shega Media and Technology, where I've developed AI-powered 
                  business intelligence solutions that significantly improved user engagement and 
                  operational efficiency.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    Addis Ababa, Ethiopia
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Key Highlights</h3>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Technical Skills</h3>
            <Card className="border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;