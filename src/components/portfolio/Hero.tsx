import { Button } from "@/components/ui/button";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Photo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="https://msho7drretuycth4.public.blob.vercel-storage.com/2U7A4262.webp"
                alt="Mehretab Hailegebriel"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-large"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Mehretab Ayalew Hailegebriel
                </h1>
                <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                  Backend Engineer
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I see backend engineering as a form of translation — turning
                  complex needs into simple, reliable solutions. For me, it's
                  not just about writing code, but about creating systems that
                  genuinely make people's lives easier.
                </p>
                <p>
                  I'm always learning the next "language" — technical or
                  otherwise — that helps me solve hard engineering problems and
                  build technology that works for people.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:cyrmee@gmail.com">
                    <FaEnvelope className="mr-2 h-5 w-5" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
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
      </div>
    </section>
  );
};

export default Hero;
