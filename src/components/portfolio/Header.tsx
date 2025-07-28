import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
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
