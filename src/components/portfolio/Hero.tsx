import { Button } from "@/components/ui/button";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="glass-light rounded-full p-4 w-fit mx-auto mb-6">
              <img
                src="https://msho7drretuycth4.public.blob.vercel-storage.com/2U7A4262.webp"
                alt="Mehretab Hailegebriel"
                className="w-48 h-48 rounded-full object-cover border-4 border-glass-border shadow-glass"
              />
            </div>
          </div>

          <div className="glass backdrop-blur-md rounded-2xl p-8 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mehretab Ayalew Hailegebriel
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              Backend Engineer
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate backend engineer with expertise in C#, .NET, cloud
              technologies, and AI-powered solutions. I build scalable systems
              that solve real-world problems and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild className="glass-button">
                <a href="mailto:cyrmee@gmail.com">
                  <FaEnvelope className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass-button bg-glass-light border border-glass-border hover:border-glass-border-hover">
                <a
                  href="https://docs.google.com/document/d/1bW952D7A45oxZ35u06SGxaTqTDfU1-3Wn5JB_0rY2vk/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
