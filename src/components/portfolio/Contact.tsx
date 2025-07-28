import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Copy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Primary Email",
      value: "cyrmee@gmail.com",
      href: "mailto:cyrmee@gmail.com"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Secondary Email", 
      value: "mehretabhailegebriel@proton.me",
      href: "mailto:mehretabhailegebriel@proton.me"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+251942547895",
      href: "tel:+251942547895"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/cyrmee",
      description: "View my code repositories"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mehretab-hailegebriel",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss opportunities or collaborate on exciting projects? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="border-0 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.href && (contact.label === "Primary Email" || contact.label === "Secondary Email" || contact.label === "Phone") ? (
                          <div className="flex items-center gap-2">
                            <a 
                              href={contact.href} 
                              className="text-foreground font-medium transition-colors"
                              onMouseEnter={e => e.currentTarget.style.color = `hsl(var(--primary))`}
                              onMouseLeave={e => e.currentTarget.style.color = ''}
                            >
                              {contact.value}
                            </a>
                            <Button
                              variant="ghost"
                              size="icon"
                              type="button"
                              aria-label={`Copy ${contact.label}`}
                              onClick={() => {
                                navigator.clipboard.writeText(contact.value);
                                toast({ title: `${contact.label} copied!` });
                              }}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <div className="text-foreground font-medium">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Let's Connect</h3>
                
                <div className="space-y-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 text-primary">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.description}</div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-hover" 
                    size="lg"
                    asChild
                  >
                    <a href="mailto:mehretabhailegebriel@proton.me">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking for a backend engineer for your team or have an exciting 
              project in mind, I'm always open to discussing new opportunities.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:mehretabhailegebriel@proton.me">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;