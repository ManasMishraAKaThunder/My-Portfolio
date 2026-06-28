import { AnimatedBorderButton } from '@/Components/AnimatedBorderButton';
import { Button } from '@/Components/Button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const skills = [
  "Java",
  "javaScript",
  "python",
  "express.js",
  "html",
  "MySql",
  "PostgreSQL",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Redis",
  "Figma",
  "Jest",
  "Pandas",
  "Versel",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Git",
  "GitHub"

];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0">
        <img src="/heros-btg.png"
          alt="hero image"
          className="w-full object-cover opacity-30" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
      </div>

      {/*green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#D4A056",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 15}s infinite`,
              animationDelay: `${Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/*content*/}
      <div className="container mx-auto px-6 pt-3 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Software Engineer • Full Stack Engineer</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animation-fade-in animation-delay-100">
                Delivering <span className="text-primary glow-text">Quality</span>
                <br />
                Through
                <br />
                <span className="font-serif italic font-normal text-white">
                  Technology
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animation-fade-in animation-delay-200">
                Hi, I'm Manas Mishra - Full-Stack Developer specializing in
                Java, Spring Boot, React, and modern web technologies. I build secure, scalable,
                and user-focused applications with an emphasis on clean code and performance.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animation-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animation-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                { icon: <FaGithub />, href: "https://github.com/ManasMishraAKaThunder" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/manas-mishra-aa29a2381" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/my-image.jpeg"
                  alt="Manas Mishra"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">
                    Technologies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}