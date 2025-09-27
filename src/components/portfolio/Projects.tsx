import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Expense Tracker Backend",
      description:
        "A sophisticated backend system for expense tracking with AI-powered categorization and insights. Built with modern technologies to provide real-time expense analysis and intelligent financial recommendations.",
      technologies: ["Node.js", "AI/ML", "REST API", "Database"],
      githubUrl: "https://github.com/cyrmee/expense-tracker-backend",
      liveUrl: "https://expense-tracker-frontend-kohl.vercel.app",
      date: "May 2025",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="glass-light rounded-2xl p-6 w-fit mx-auto mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Personal and professional projects showcasing my technical
                expertise
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`glass border-glass-border rounded-2xl glass-hover transition-all duration-300 ${
                  project.featured ? "ring-2 ring-primary/30" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-foreground">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge className="bg-primary text-background font-semibold">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.date}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="glass-light border border-glass-border hover:border-glass-border-hover transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="glass-button border-glass-border hover:border-glass-border-hover"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="glass-button bg-primary text-primary-foreground border-glass-border hover:border-glass-border-hover"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg" asChild className="glass-button border-glass-border hover:border-glass-border-hover">
              <a
                href="https://github.com/cyrmee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
