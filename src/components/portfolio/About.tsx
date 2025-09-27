import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuCalendar,
  LuCloud,
  LuCode,
  LuDatabase,
  LuMapPin,
  LuServer,
} from "react-icons/lu";

const About = () => {
  const skills = [
    "C#",
    "TypeScript",
    "Python",
    "Java",
    ".NET",
    "NestJS",
    "GraphQL",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Stripe",
  ];

  const highlights = [
    {
      icon: <LuServer className="h-6 w-6 text-primary" />,
      title: "Backend Systems",
      description:
        "Architecting scalable backend solutions with modern frameworks and cloud technologies",
    },
    {
      icon: <LuCloud className="h-6 w-6 text-primary" />,
      title: "Cloud Solutions",
      description:
        "AWS & Azure certified with hands-on experience deploying production systems",
    },
    {
      icon: <LuDatabase className="h-6 w-6 text-primary" />,
      title: "Data Engineering",
      description:
        "Optimizing database performance and building efficient data pipelines",
    },
    {
      icon: <LuCode className="h-6 w-6 text-primary" />,
      title: "AI Integration",
      description:
        "Implementing AI-powered features and semantic search solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A results-driven backend engineer passionate about building
              robust, scalable systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Overview
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I see backend engineering as a form of translation — turning
                  complex needs into simple, reliable solutions. For me, it’s
                  not just about writing code, but about creating systems that
                  genuinely make people’s lives easier.
                </p>
                <p>
                  I specialize in C#/.NET, Python, and cloud platforms (AWS &
                  Azure), using these tools to design solutions that are
                  scalable, efficient, and built for impact. Whether it’s
                  accelerating access to data, streamlining operations, or
                  powering AI-driven insights, I focus on clarity and purpose in
                  every project.
                </p>
                <p>
                  I’m always learning the next “language” — technical or
                  otherwise — that helps me solve hard engineering problems and
                  build technology that works for people
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <LuMapPin className="h-4 w-4 mr-1 text-primary" />
                    Addis Ababa, Ethiopia
                  </div>
                  <div className="flex items-center">
                    <LuCalendar className="h-4 w-4 mr-1 text-primary" />
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Key Highlights
              </h3>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{highlight.icon}</div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Technical Skills
            </h3>
            <Card className="border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-muted text-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default shadow-soft"
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
