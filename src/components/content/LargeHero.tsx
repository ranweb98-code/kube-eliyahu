import heroImage from "@/assets/kubbeh-1.jpg";
import logoImg from "@/assets/logo.jpg";

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
        
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-12 flex flex-col items-end">
          <div className="overflow-hidden mb-3 animate-hero-slide-up">
            <img 
              src={logoImg} 
              alt="קובה אליהו" 
              className="h-24 md:h-32 lg:h-40 w-auto rounded-full drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="overflow-hidden">
            <p 
              className="text-xl md:text-3xl font-light mb-6 tracking-wide animate-hero-slide-up"
              style={{ 
                animationDelay: "400ms",
                color: "hsl(var(--accent))",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              טעמים מבית סבתא
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;
