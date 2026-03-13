import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import kubbeh8 from "@/assets/kubbeh-8.jpg";

const CountUp = ({ target, suffix = "" }: { target: number | string; suffix?: string }) => {
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
    if (!isVisible || typeof target !== "number") return;
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
    <div ref={ref}>
      <p className="font-serif text-4xl md:text-5xl font-bold text-primary">
        {typeof target === "number" ? count : target}{suffix}
      </p>
    </div>
  );
};

const EditorialSection = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll className="text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
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
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8">
              <img
                src={kubbeh8}
                alt="הכנת קובה מסורתית"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <CountUp target={100} suffix="%" />
                <p className="text-sm text-muted-foreground mt-1">עבודת יד</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary">כשר</p>
                <p className="text-sm text-muted-foreground mt-1">בשרי</p>
              </div>
              <div className="text-center">
                <CountUp target={365} />
                <p className="text-sm text-muted-foreground mt-1">ימים בשנה</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
