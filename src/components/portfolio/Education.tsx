import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Education = () => {
  const education = {
    degree: "Bachelor's Degree, Computer Science",
    institution: "HiLCoE School of Computer Science and Technology",
    period: "Jan 2018 – Aug 2022",
    location: "Addis Ababa, Ethiopia"
  };

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      period: "Feb 2024 – Feb 2027",
      credlyUrl: "https://www.credly.com/badges/c6dc42aa-f8fa-485d-b7f7-afbaf3789f67",
      featured: true
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services", 
      period: "Oct 2023 – Feb 2027",
      credlyUrl: "https://www.credly.com/badges/2af18bc8-1592-44d7-9e0f-6bfbe7b911a6",
      featured: true
    },
    {
      name: "ALX Cloud Computing Certification",
      issuer: "ALX",
      period: "May 2024",
      credlyUrl: "https://intranet.alxswe.com/certificates/XLB2cNeTMJ"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Academic background and professional certifications
            </p>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    <FaGraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">{education.degree}</CardTitle>
                    <div className="text-primary font-medium mb-1">{education.institution}</div>
                    <div className="text-sm text-muted-foreground">
                      {education.period} • {education.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <FaAward className="h-6 w-6 text-primary" />
                Professional Certifications
              </h3>
              
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-shadow w-full">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
                            <h4 className="font-semibold text-foreground">{cert.name}</h4>
                            {cert.featured && (
                              <Badge className="bg-accent text-accent-foreground w-fit sm:w-auto">
                                AWS Certified
                              </Badge>
                            )}
                          </div>
                          <div className="text-primary font-medium mb-1">{cert.issuer}</div>
                          <div className="text-sm text-muted-foreground">{cert.period}</div>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-auto">
                          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                            <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer">
                              <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                              View Certificate
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;