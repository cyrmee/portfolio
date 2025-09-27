import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 glass backdrop-blur-md border-0 border-b border-glass-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="https://github.com/cyrmee"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button p-3 rounded-full hover:scale-110 transition-all duration-300"
        >
          <FaGithub className="h-6 w-6 text-foreground" />
        </a>
        <a
          href="https://www.linkedin.com/in/mehretab-hailegebriel"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button p-3 rounded-full hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin className="h-6 w-6 text-foreground" />
        </a>
      </div>
    </header>
  );
};

export default Header;
