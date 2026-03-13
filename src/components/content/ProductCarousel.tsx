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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Use CSS animation approach for smooth infinite scroll
    const totalWidth = track.scrollWidth / 2;
    track.style.setProperty("--scroll-width", `${totalWidth}px`);
  }, []);

  const allItems = [...products, ...products];

  return (
    <section className="w-full py-12 px-6">
      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            התפריט שלנו
          </h2>
        </div>
      </AnimateOnScroll>
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5 animate-marquee"
          style={{ width: "max-content" }}
        >
          {allItems.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="w-[180px] sm:w-[220px] md:w-[260px] flex-shrink-0 group cursor-pointer"
            >
              <div className="aspect-[4/5] mb-3 overflow-hidden rounded-lg bg-muted/10 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    חדש!
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
