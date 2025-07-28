import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Mehretab Hailegebriel</h3>
              <p className="text-muted-foreground">Backend Engineer • AWS Solutions Architect</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/cyrmee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors hover:bg-primary/10"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/mehretab-hailegebriel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors hover:bg-primary/10"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href="mailto:mehretabhailegebriel@proton.me"
                className="p-2 rounded-lg transition-colors hover:bg-primary/10"
              >
                <Mail className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://wa.me/251942547895"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors hover:bg-primary/10"
              >
                <FaWhatsapp className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://t.me/cyrme"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors hover:bg-primary/10"
              >
                <FaTelegramPlane className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground mt-2">
              © {new Date().getFullYear()} Mehretab Hailegebriel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;