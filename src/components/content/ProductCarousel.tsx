import { useEffect, useRef } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import packSelek from "@/assets/pack-kubbeh-selek.png";
import packSiska from "@/assets/pack-kubbeh-siska.png";
import packNablusia from "@/assets/pack-kubbeh-nablusia.png";
import packCigarSiska from "@/assets/pack-cigar-siska.png";
import packCigarMoroccan from "@/assets/pack-cigar-moroccan.png";
import kubbeh3 from "@/assets/kubbeh-3.jpg";
import kubbeh5 from "@/assets/kubbeh-5.jpg";
import kubbeh7 from "@/assets/kubbeh-7.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "קובה סלק", description: "במילוי בשר בקר", image: packSelek },
  { id: 2, name: "קובה סיסקה", description: "מבשר מפורק", image: packSiska, isNew: true },
  { id: 3, name: "קובה נבלוסיה", description: "במרק עגבניות", image: packNablusia },
  { id: 4, name: "סיגר סיסקה", description: "סיגר במילוי בשר", image: packCigarSiska },
  { id: 5, name: "סיגר מרוקאי", description: "סיגר מסורתי", image: packCigarMoroccan, isNew: true },
  { id: 6, name: "קובה חמוסטה", description: "במרק עגבניות חמצמץ", image: kubbeh3 },
  { id: 7, name: "קובה מטוגנת", description: "פריכה ועשירה", image: kubbeh5 },
  { id: 8, name: "מגש קובה", description: "מגש מעורב לאירועים", image: kubbeh7 },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const speed = 0.5;
    let isPaused = false;

    const animate = () => {
      if (!isPaused && container) {
        scrollPos += speed;
        const maxScroll = container.scrollWidth / 2;
        if (scrollPos >= maxScroll) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleEnter = () => { isPaused = true; };
    const handleLeave = () => { isPaused = false; };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("touchstart", handleEnter);
    container.addEventListener("touchend", handleLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("touchstart", handleEnter);
      container.removeEventListener("touchend", handleLeave);
    };
  }, []);

  const doubledProducts = [...products, ...products];

  return (
    <section className="w-full py-12 px-6">
      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            התפריט שלנו
          </h2>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={150}>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden max-w-5xl mx-auto"
          style={{ scrollBehavior: "auto" }}
        >
          {doubledProducts.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="flex-shrink-0 w-[65%] sm:w-[45%] md:w-[30%] group cursor-pointer"
            >
              <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-muted/10 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    חדש!
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default ProductCarousel;
