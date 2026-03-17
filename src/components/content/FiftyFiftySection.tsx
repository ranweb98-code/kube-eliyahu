import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowLeft } from "lucide-react";
import fiftyFiftyImage from "@/assets/fifty-fifty-image.jpg";
import kubbeh3 from "@/assets/kubbeh-3.jpg";

const FiftyFiftySection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            המומלצים שלנו
          </h2>
          <p className="text-muted-foreground text-base">
            קובה ביתית במילוי עשיר, מוכנה בעבודת יד מסורתית
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimateOnScroll delay={100}>
            <Link to="/products/kubeh-selek" className="group block">
              <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg relative">
                <img
                  src={fiftyFiftyImage}
                  alt="קובה סלק במילוי בשר בקר"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                    לפרטים ומתכון
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                קובה סלק
              </h3>
              <p className="text-muted-foreground text-sm">
                קובה למרק במילוי בשר בקר טרי, בתוספת סלק אדום
              </p>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <Link to="/products/kubeh-siska" className="group block">
              <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg relative">
                <img
                  src={kubbeh3}
                  alt="קובה סיסקה מבשר מפורק"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                    לפרטים ומתכון
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                קובה סיסקה
              </h3>
              <p className="text-muted-foreground text-sm">
                קובה סיסקה למרק מבשר מפורק, טעם עשיר ומלא
              </p>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
