import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="glass backdrop-blur-md border-t border-glass-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
              <div className="mx-auto md:mx-0">
                <h3 className="text-xl font-bold mb-2 text-foreground">Mehretab Hailegebriel</h3>
                <p className="text-muted-foreground">
                  Backend Engineer • AWS Solutions Architect
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4 mx-auto md:mx-0">
                <a
                  href="https://github.com/cyrmee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mehretab-hailegebriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="mailto:mehretabhailegebriel@proton.me"
                  className="glass-button p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://wa.me/251942547895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaWhatsapp className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://t.me/cyrme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaTelegramPlane className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-glass-border pt-6 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Mehretab Hailegebriel. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
