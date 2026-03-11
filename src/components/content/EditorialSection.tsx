import kubbeh8 from "@/assets/kubbeh-8.jpg";

const EditorialSection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              הסיפור שלנו
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              קובה אליהו נולד מתוך אהבה למטבח המסורתי של בית סבתא. כל קובה מוכנה בעבודת יד, עם חומרי גלם איכותיים ומתכון מסורתי שעובר מדור לדור.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              אנחנו מאמינים שאוכל טוב מחבר אנשים. לכן כל מנה מוכנה באהבה, בדיוק כמו שסבתא הייתה מכינה.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">עבודת יד</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">כשר</p>
                <p className="text-xs text-muted-foreground">בשרי</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">טרי</p>
                <p className="text-xs text-muted-foreground">כל יום</p>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src={kubbeh8}
                alt="הכנת קובה מסורתית"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
