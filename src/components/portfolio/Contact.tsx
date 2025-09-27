import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      label: "Primary Email",
      value: "cyrmee@gmail.com",
      href: "mailto:cyrmee@gmail.com",
    },
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      label: "Secondary Email",
      value: "mehretabhailegebriel@proton.me",
      href: "mailto:mehretabhailegebriel@proton.me",
    },
    {
      icon: <FaPhone className="h-5 w-5" />,
      label: "Phone",
      value: "+251942547895",
      href: "tel:+251942547895",
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5" />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/cyrmee",
      description: "View my code repositories",
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mehretab-hailegebriel",
      description: "Connect with me professionally",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss opportunities or collaborate on exciting
              projects? I'd love to hear from you.
            </p>
          </div>
          <Card className="bg-card border-0 shadow-medium rounded-xl p-6">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-0 justify-items-center">
                {/* Contact Information */}
                <Card className="border-0 shadow-none w-full max-w-md mx-auto bg-transparent">
                  <CardContent className="p-4 sm:p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((contact) => (
                        <div
                          key={contact.value}
                          className="flex items-center space-x-4"
                        >
                          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground">
                              {contact.label}
                            </div>
                            <button
                              className="text-foreground font-medium cursor-pointer bg-transparent border-none p-0 hover:text-primary"
                              onClick={() => {
                                navigator.clipboard.writeText(contact.value);
                                toast({
                                  title: `${contact.label} copied!`,
                                });
                              }}
                              aria-label={`Copy ${contact.label}`}
                            >
                              {contact.value}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {/* Quick Actions */}
                <Card className="border-0 shadow-none w-full max-w-md mx-auto bg-transparent">
                  <CardContent className="p-4 sm:p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Let's Connect
                    </h3>
                    <div className="space-y-4 mb-6">
                      {socialLinks.map((social) => (
                        <div
                          key={social.href}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors w-full"
                        >
                          <div className="flex-shrink-0 text-primary">
                            {social.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground">
                              {social.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {social.description}
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full sm:w-auto"
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          {/* Call to Action */}
          <div className="text-center bg-card rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking for a backend engineer for your team or
              have an exciting project in mind, I'm always open to discussing
              new opportunities.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:mehretabhailegebriel@proton.me">
                Start a Conversation
              </a>
            </Button>
            <div className="space-y-3">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
