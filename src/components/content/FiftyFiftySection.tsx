import AnimateOnScroll from "@/components/AnimateOnScroll";
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
            <div className="group">
              <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img
                  src={fiftyFiftyImage}
                  alt="קובה סלק במילוי בשר בקר"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                קובה סלק
              </h3>
              <p className="text-muted-foreground text-sm">
                קובה למרק במילוי בשר בקר טרי, בתוספת סלק אדום
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <div className="group">
              <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img
                  src={kubbeh3}
                  alt="קובה סיסקה מבשר מפורק"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                קובה סיסקה
              </h3>
              <p className="text-muted-foreground text-sm">
                קובה סיסקה למרק מבשר מפורק, טעם עשיר ומלא
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
