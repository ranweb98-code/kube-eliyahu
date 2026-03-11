import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import kubbeh1 from "@/assets/kubbeh-1.jpg";
import kubbeh2 from "@/assets/kubbeh-2.jpg";
import kubbeh3 from "@/assets/kubbeh-3.jpg";
import kubbeh4 from "@/assets/kubbeh-4.jpg";
import kubbeh5 from "@/assets/kubbeh-5.jpg";
import kubbeh6 from "@/assets/kubbeh-6.jpg";
import kubbeh7 from "@/assets/kubbeh-7.jpg";
import kubbeh8 from "@/assets/kubbeh-8.jpg";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  weight: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "קובה סלק", description: "קובה למרק במילוי בשר בקר טרי, מוגשת עם סלק אדום. משקל נטו 800 גרם.", weight: "800 גרם", price: "₪45", image: kubbeh1 },
  { id: 2, name: "קובה סיסקה", description: "קובה סיסקה למרק מבשר מפורק עשיר. משקל נטו 800 גרם.", weight: "800 גרם", price: "₪50", image: kubbeh2, isNew: true },
  { id: 3, name: "קובה חמוסטה", description: "קובה במרק עגבניות חמצמץ מסורתי.", weight: "800 גרם", price: "₪45", image: kubbeh3 },
  { id: 4, name: "קובה המוסט", description: "קובה במרק לימון מרענן עם עשבי תיבול.", weight: "800 גרם", price: "₪45", image: kubbeh4 },
  { id: 5, name: "קובה מטוגנת", description: "קובה פריכה מטוגנת במילוי בשר עשיר.", weight: "500 גרם", price: "₪55", image: kubbeh5, isNew: true },
  { id: 6, name: "מרק קובה מוכן", description: "מרק ביתי מוכן עם קובה טרייה. רק לחמם ולהגיש.", weight: "1.2 ק״ג", price: "₪60", image: kubbeh6 },
  { id: 7, name: "מגש קובה לאירועים", description: "מגש מעורב של קובה לאירועים ושבתות. מינימום 20 יחידות.", weight: "לפי הזמנה", price: "החל מ-₪120", image: kubbeh7 },
  { id: 8, name: "קובה משפחתית", description: "חבילה משפחתית - 2 סוגי קובה לבחירה.", weight: "1.6 ק״ג", price: "₪85", image: kubbeh8 },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
              התפריט שלנו
            </h1>
            <p className="text-muted-foreground text-lg">
              כל הקובות מוכנות בעבודת יד, מחומרי גלם איכותיים. כשר בשרי.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isNew && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                      חדש!
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <p className="text-xs text-muted-foreground/70">{item.weight}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-primary rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              רוצים להזמין?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              התקשרו אלינו ונשמח לעזור עם ההזמנה
            </p>
            <a href="tel:0509766643">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-medium gap-2">
                <Phone className="w-5 h-5" />
                050-976-6643
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
