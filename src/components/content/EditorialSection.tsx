import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import kubbeh8 from "@/assets/kubbeh-8.jpg";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-extrabold text-accent mb-2">
        {count}+{suffix}
      </p>
    </div>
  );
};

const stats = [
  { target: 20, label: "שנות ניסיון" },
  { target: 80, label: "נקודות מכירה" },
  { target: 10, label: "טעמי קובה" },
];

const EditorialSection = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Animated Counters */}
        <AnimateOnScroll className="mb-16">
          <div className="bg-primary rounded-2xl p-10 md:p-14">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <CountUp target={s.target} />
                  <p className="text-primary-foreground/80 text-sm md:text-base mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll className="text-center md:text-right space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              הסיפור שלנו
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              קובה אליהו נולד מתוך אהבה אמיתית למטבח הביתי המסורתי של בית סבתא. כבר שנים ארוכות אנחנו מכינים קובה בעבודת יד, עם אותם חומרי גלם איכותיים ואותו מתכון מסורתי שעובר מדור לדור.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              אנחנו מאמינים שאוכל טוב מחבר אנשים ומשפחות. כל קובה שיוצאת מהמטבח שלנו מוכנה באהבה ובקפידה, בדיוק כמו שסבתא הייתה מכינה – בלי קיצורי דרך ובלי פשרות על הטעם.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              מהמטבח הקטן שלנו הצלחנו להגיע ללקוחות בכל רחבי הארץ, ואנחנו גאים בכל מנה שמוגשת על שולחן המשפחה שלכם.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="order-first md:order-last">
            <div className="w-full aspect-square overflow-hidden rounded-2xl">
              <img
                src={kubbeh8}
                alt="הכנת קובה מסורתית"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
