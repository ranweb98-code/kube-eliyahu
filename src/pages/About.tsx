import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import kubbeh6 from "@/assets/kubbeh-6.jpg";
import kubbeh8 from "@/assets/kubbeh-8.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              הסיפור שלנו
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              מסורת של טעם, אהבה לבישול, ומתכונים שעוברים מדור לדור
            </p>
          </div>

          <div className="space-y-16">
            {/* Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <img src={kubbeh6} alt="הכנת קובה" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">מתכון של סבתא</h2>
                <p className="text-muted-foreground leading-relaxed">
                  קובה אליהו נולד מתוך אהבה אמיתית למטבח הביתי המסורתי. המתכונים שלנו עוברים מדור לדור, עם אותו טעם אותנטי שזוכרים מבית סבתא.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  כל קובה מוכנה בעבודת יד, עם חומרי גלם טריים ואיכותיים, ללא חומרים משמרים או תוספים מיותרים.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 md:order-first order-last">
                <h2 className="font-serif text-2xl font-bold text-foreground">איכות ללא פשרות</h2>
                <p className="text-muted-foreground leading-relaxed">
                  אנחנו מקפידים על כשרות בשרית, חומרי גלם מהשורה הראשונה, ותהליך הכנה מדוקדק. כל מנה עוברת בקרת איכות לפני שהיא יוצאת מהמטבח שלנו.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="font-serif text-xl font-bold text-primary">חומרי גלם</p>
                    <p className="text-xs text-muted-foreground">איכותיים</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="font-serif text-xl font-bold text-primary">בישול קצר</p>
                    <p className="text-xs text-muted-foreground">~10 דקות</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="font-serif text-xl font-bold text-primary">מתכון</p>
                    <p className="text-xs text-muted-foreground">מסורתי</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <img src={kubbeh8} alt="קובה מוכנה" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
