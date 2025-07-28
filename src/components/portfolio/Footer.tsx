import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Mehretab Hailegebriel</h3>
              <p className="text-background/80">Backend Engineer • Problem Solver • Cloud Enthusiast</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/cyrmee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mehretab-hailegebriel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mehretabhailegebriel@proton.me"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 flex items-center justify-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-400" /> using React, TypeScript & Tailwind CSS
            </p>
            <p className="text-background/60 mt-2">
              © {new Date().getFullYear()} Mehretab Hailegebriel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;