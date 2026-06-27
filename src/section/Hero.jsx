export const Hero = () => {
  return (
    <section className="relative min-h-screen flex item-center overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg"
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
           style={{ backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 15}s infinite`,
            animationDelay: `${Math.random() * 15}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}