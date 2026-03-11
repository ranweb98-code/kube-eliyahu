import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import kubbeh5 from "@/assets/kubbeh-5.jpg";
import kubbeh7 from "@/assets/kubbeh-7.jpg";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <AnimateOnScroll className="lg:col-span-1 space-y-6 text-center lg:text-right">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              הזמנות לאירועים ושבת
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              מגשי קובה לאירועים, שבתות וחגים. הכנה טרייה לפי הזמנה.
              משלוחים לכל הארץ.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="tel:0509766643">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover-scale rounded-full px-6 py-5 gap-2 font-medium">
                  <Phone className="w-4 h-4" />
                  הזמן עכשיו
                </Button>
              </a>
            </div>
          </AnimateOnScroll>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <AnimateOnScroll delay={150} className="aspect-[3/4] rounded-lg overflow-hidden">
              <img src={kubbeh5} alt="קובה לאירועים" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300} className="aspect-[3/4] rounded-lg overflow-hidden">
              <img src={kubbeh7} alt="מגש קובה" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
