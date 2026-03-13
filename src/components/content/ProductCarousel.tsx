import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import kubbeh1 from "@/assets/kubbeh-1.jpg";
import kubbeh4 from "@/assets/kubbeh-4.jpg";
import kubbeh5 from "@/assets/kubbeh-5.jpg";
import kubbeh6 from "@/assets/kubbeh-6.jpg";
import kubbeh7 from "@/assets/kubbeh-7.jpg";
import kubbeh8 from "@/assets/kubbeh-8.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "קובה סלק", description: "במילוי בשר בקר", image: kubbeh1 },
  { id: 2, name: "קובה סיסקה", description: "מבשר מפורק", image: kubbeh4, isNew: true },
  { id: 3, name: "קובה חמוסטה", description: "במרק עגבניות", image: kubbeh5 },
  { id: 4, name: "קובה המוסט", description: "במרק לימון", image: kubbeh6 },
  { id: 5, name: "קובה ברשת", description: "קובה מטוגנת", image: kubbeh7, isNew: true },
  { id: 6, name: "מרק קובה", description: "מרק מוכן עם קובה", image: kubbeh8 },
];

const ProductCarousel = () => {
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
        <Carousel opts={{ align: "start", loop: false }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="basis-[75%] sm:basis-1/2 md:basis-1/3 pl-4">
                <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-muted/10 relative">
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
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </AnimateOnScroll>
    </section>
  );
};

export default ProductCarousel;
