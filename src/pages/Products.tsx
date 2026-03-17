import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import packSelek from "@/assets/pack-kubbeh-selek.png";
import packSiska from "@/assets/pack-kubbeh-siska.png";
import packNablusia from "@/assets/pack-kubbeh-nablusia.png";
import packCigarMoroccan from "@/assets/pack-cigar-moroccan.png";
import packCigarSiska from "@/assets/pack-cigar-siska.png";

interface ProductItem {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  slug?: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    name: "קובה למרק - בשר בקר",
    subtitle: "קובה סלק",
    description: "קובה למרק במילוי בשר בקר טרי, מוגשת עם סלק אדום עשיר. משקל נטו 800 גרם.",
    image: packSelek,
    slug: "kubeh-selek",
  },
  {
    id: 2,
    name: "קובה סיסקה למרק",
    subtitle: "מבשר מפורק",
    description: "קובה סיסקה למרק מבשר מפורק עשיר בתיבול מסורתי. משקל נטו 800 גרם.",
    image: packSiska,
    slug: "kubeh-siska",
  },
  {
    id: 3,
    name: "קובה נבולסיה",
    subtitle: "מבשר בקר וצנוברים",
    description: "קובה נבולסיה מטוגנת במילוי בשר בקר וצנוברים. משקל נטו 800 גרם.",
    image: packNablusia,
  },
  {
    id: 4,
    name: "סיגר מרוקאי",
    subtitle: "מבשר בקר - פיקנטי",
    description: "סיגר מרוקאי פיקנטי במילוי בשר בקר עשיר. משקל נטו 450 גרם.",
    image: packCigarMoroccan,
  },
  {
    id: 5,
    name: "סיגר סיסקה",
    subtitle: "מבשר מפורק",
    description: "סיגר סיסקה במילוי בשר מפורק עם תיבול עדין. משקל נטו 450 גרם.",
    image: packCigarSiska,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
                המוצרים שלנו
              </h1>
              <p className="text-muted-foreground text-lg">
                כל המוצרים כשרים בהשגחה מהודרת, מיוצרים מחומרי גלם איכותיים
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.id} delay={i * 120}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
                  {product.slug ? (
                    <Link to={`/products/${product.slug}`}>
                      <div className="aspect-[3/4] overflow-hidden bg-muted/5 p-4 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="aspect-[3/4] overflow-hidden bg-muted/5 p-4 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-2 text-center">
                    {product.slug ? (
                      <Link to={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          {product.name}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {product.name}
                      </h3>
                    )}
                    <p className="text-primary font-semibold text-sm">
                      {product.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* CTA */}
          <AnimateOnScroll>
            <div className="text-center bg-primary rounded-2xl p-8 md:p-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                רוצים להזמין?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                התקשרו אלינו להזמנת מוצרים
              </p>
              <a href="tel:0509766643">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-medium gap-2">
                  <Phone className="w-5 h-5" />
                  050-976-6643
                </Button>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
