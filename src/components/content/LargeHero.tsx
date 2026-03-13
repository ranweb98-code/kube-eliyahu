import heroImage from "@/assets/kubbeh-1.jpg";

const LargeHero = () => {
  return (
    <section className="relative w-full mb-0 overflow-hidden">
      <div className="relative w-full h-[100vh] min-h-[600px]">
        <img
          src={heroImage}
          alt="קובה ביתית מסורתית"
          className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-12 text-white">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 leading-none tracking-tight animate-fade-in"
            style={{ 
              animationDelay: "300ms", 
              animationFillMode: "both",
              fontFamily: "'Rubik', sans-serif",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            <span className="text-accent">קובה</span>{" "}
            <span className="text-white">אליהו</span>
          </h1>
          <p 
            className="text-xl md:text-3xl font-light mb-6 tracking-wide animate-fade-in"
            style={{ 
              animationDelay: "500ms", 
              animationFillMode: "both",
              color: "hsl(var(--accent))",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            טעמים מבית סבתא
          </p>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;
