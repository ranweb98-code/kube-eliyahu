import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kubbeh-1.jpg";

const LargeHero = () => {
  return (
    <section className="relative w-full mb-0 overflow-hidden">
      <div className="relative w-full h-[100vh] min-h-[600px]">
        <img
          src={heroImage}
          alt="קובה ביתית מסורתית"
          className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-12 text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
            קובה אליהו
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6 text-white/90 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "both" }}>
            טעמים מבית סבתא
          </p>
          <a href="tel:0509766643" className="animate-fade-in inline-block" style={{ animationDelay: "700ms", animationFillMode: "both" }}>
            


            
          </a>
        </div>
      </div>
    </section>);

};

export default LargeHero;