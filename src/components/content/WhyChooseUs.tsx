import { lazy, Suspense } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Heart, Leaf, ChefHat, Users } from "lucide-react";

const KubbehSphere3D = lazy(() => import("./KubbehSphere3D"));

const features = [
  {
    icon: ChefHat,
    title: "מתכון מסבתא",
    description: "מתכון מסורתי שעובר מדור לדור, בדיוק כמו פעם",
  },
  {
    icon: Leaf,
    title: "מרכיבים טבעיים",
    description: "חומרי גלם איכותיים וטריים ללא חומרים משמרים",
  },
  {
    icon: Heart,
    title: "הכנה באהבה",
    description: "כל קובה מוכנה בעבודת יד עם תשומת לב לכל פרט",
  },
  {
    icon: Users,
    title: "שירות אישי",
    description: "ליווי מקצועי ושירות חם ומשפחתי לכל לקוח",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <Suspense fallback={<div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] mx-auto" />}>
            <KubbehSphere3D />
          </Suspense>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 mt-6">
            למה לבחור בנו?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            כי קובה אליהו זה לא סתם קובה — זה טעם של בית
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
