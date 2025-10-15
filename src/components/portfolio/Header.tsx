import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="https://github.com/cyrmee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="h-8 w-8 text-foreground" />
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        <a
          href="https://www.linkedin.com/in/mehretab-hailegebriel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin className="h-8 w-8 text-foreground" />
        </a>
      </div>
    </header>
  );
};

export default Header;
