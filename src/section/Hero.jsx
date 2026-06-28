import {Button} from '@/components/Button'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0">
        <img src="/heros-btg.jpg"
         alt="hero image"
        className="w-full object-cover opacity-30"/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
      </div>

      {/*green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-none">
        {[...Array(30)].map((_, index) => (
          <div 
           key={index}
           className="absolute w-1.5 h-1.5 rounded-full opacity-60"
           style={{ backgroundColor: "#D4A056",
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
          {/*left column - text content*/}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Software Engineer • Full Stack Engineer</span>
            </span>
            {/* Add the rest of your text below this line */}
            
          </div>
          {/*headline*/}
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
          {/*CTAs*/}
          <div>
            <button size="lg">Contact Me</button>
          </div>

          <div className="flex justify-center items-center w-full">
             {/*right column - profile image */}
          </div>
        </div>
      </div>
    </section>
  );
}