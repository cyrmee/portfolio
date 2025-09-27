import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "Shega Media and Technology",
      location: "Addis Ababa, Ethiopia",
      period: "Dec 2024 – Present",
      achievements: [
        "Engineered Shega's first AI-powered business intelligence search using GTP-5 and Azure AI Foundry, addressing Ethiopia's data scarcity by aggregating insights and enabling semantic search—tripling engagement, cutting search time by 95%",
        "Created vector search indexes on Azure AI Search using Python notebooks for semantic search over structured and unstructured data in Azure Blob Storage, improving search relevance scores by 35%",
        "Optimized data flow from Azure Blob to MongoDB using Azure Functions, reducing storage costs 80% and improving reporting speed 5x",
        "Developed a GraphQL API (C#, MongoDB, HotChocolate) that accelerated time-series data retrieval, with requests completing in 400-900ms",
      ],
      technologies: [
        "C#",
        "Python",
        "GraphQL",
        "Azure AI",
        "MongoDB",
        "Azure Functions",
      ],
    },
    {
      title: "Backend Developer",
      company: "MEDKET Tech Solutions",
      location: "Addis Ababa, Ethiopia",
      period: "Mar 2023 – Oct 2024",
      achievements: [
        "Built a .NET-based hospital scheduler that improved efficiency 95% and eliminated conflicts for 1,000+ Zewditu Hospital staff",
        "Streamlined payroll using C#, EF Core, and REST APIs, reducing processing time from 15 to 2 days",
        "Deployed and maintained HRM platform on AWS (EC2, S3, RDS, ELB, CloudWatch) with 99.99% uptime and 10,000+ weekly transactions",
      ],
      technologies: [".NET", "C#", "EF Core", "AWS", "REST APIs"],
    },
    {
      title: "Backend Developer (Contract)",
      company: "Maraki Consultancy",
      location: "Addis Ababa, Ethiopia",
      period: "Jan 2024 – Jun 2024",
      achievements: [
        "Replaced manual processes with task automation using NestJS, PostgreSQL, and Prisma, speeding operations by 95%",
        "Launched real-time API using NestJS, TypeScript, and Socket.io, supporting 5,000+ concurrent users for tracking progress, chatting, and forum participation",
        "Integrated Google Calendar API with OAuth 2.0 to align employee deadlines and reduce scheduling conflicts",
      ],
      technologies: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Socket.io",
        "OAuth 2.0",
      ],
    },
    {
      title: "Backend Developer",
      company: "Binary Technologies (beU Delivery)",
      location: "Addis Ababa, Ethiopia",
      period: "Oct 2022 – May 2023",
      achievements: [
        "Implemented auditing features for user activity and used Redis caching with Laravel/MySQL to cut query response times by 30% across 750+ restaurant partners",
        "Resolved 50+ critical bugs with QA team using Jira & Postman, increasing platform stability",
        "Designed and implemented a scalable .NET service for distance and rating APIs, handling 500,000+ monthly requests",
      ],
      technologies: ["Laravel", "MySQL", "Redis", ".NET", "Jira", "Postman"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building scalable backend solutions across different industries
              and technologies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-medium hover:shadow-large transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <FaBuilding className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <FaCalendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground leading-relaxed"
                      >
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-muted text-foreground border border-border"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
