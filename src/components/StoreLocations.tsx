import { useState, useMemo, useEffect } from "react";
import { MapPin, Phone, Search, Navigation, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface Store {
  name: string;
  address?: string;
  phone?: string;
}

interface CityGroup {
  city: string;
  stores: Store[];
}

// Fallback static data
const staticStoreData: CityGroup[] = [
  {
    city: "ירושלים",
    stores: [
      { name: "מינימרקט גוננים", address: "יצחק שדה 17" },
      { name: "קצביית ברכת שמואל רמות", address: "דרך החורש 90" },
      { name: "ממלכת הבשר", address: "הכיסופים 801/36" },
      { name: "ממלכת הבשר", address: "תחנת דלק מנטה ג'ו גבעת זאב" },
      { name: "ממלכת הבשר", address: "תחנת דלק פז משה דיין 98" },
      { name: "אריאל ובניו שיווק בשר", address: "קרית יובל" },
      { name: "הקצב אלעד הזקן", address: "הגננת 240" },
      { name: "סופר זול גילה", address: "איילה 419" },
      { name: "הקצבים מירושלים", address: "התמרוקים 1" },
      { name: "סופר ספיר", address: "הרב הרצוג 1, הר חומה" },
      { name: "רבאני מרקט בכיכר", address: "אביבית 1, קרית מנחם" },
      { name: "רבאני מרקט בנורית", address: "הנורית 21, קרית מנחם" },
      { name: "דגי הלל", address: "הממציא 1, הר חומה" },
      { name: "עונג בית וגן", address: "הרב עוזיאל 30" },
      { name: "איטליז מזרחי", address: 'אצ"ג 1' },
      { name: "איטליז מזרחי", address: "שוק הבוגרים" },
      { name: "קולינרי המעדניה", address: "התעשיה 12" },
      { name: "אלה מוצרי בשר", address: "עץ חיים 8" },
      { name: "סופר דיל", address: "יהודה ליאו פיקרד 10" },
      { name: "סופר דיל", address: "דרך חברון 28" },
      { name: "סופר דיל", address: "דרך בית לחם 77" },
      { name: "בואנה קארנה", address: "הנרייטה סולד 3" },
      { name: "מ.ל שירותי קצבים", address: "אליהו קורן 29" },
      { name: "איטליז מזרחי", address: "אדוניהו הכהן 5" },
      { name: "מפגש השייח", address: "האומן 23" },
      { name: "הקצביה של שגב", address: "מבוא סם שפיגל 4" },
      { name: "מפגש הסדנא", address: "הסדנא 5" },
      { name: "קצביית חזקיהו", address: "אורוגאויי 1" },
      { name: "מינימרקט הדר", address: "השישה עשר 21" },
      { name: "עידן הבשר", address: "פארן 7" },
    ],
  },
  { city: "בית שמש", stores: [
    { name: "קצביית יגאל חזן", address: "נוימן 60" },
    { name: "קלית יבגי", address: "יגאל אלון 24" },
    { name: "סופר מלכה", address: "הנשיא 46" },
    { name: "קצביית ברכת שמואל", address: "נחל זוהר 3" },
    { name: "אושרי קצבים", address: 'שד\' הדקל 11' },
    { name: "רחמים דגים", address: "יצחק רבין 19" },
    { name: "ברכת השדה", address: "העליה 17" },
    { name: "אריאל ובניו שיווק בשר", address: "המלאכה 2, הר טוב" },
    { name: "הקצבים מירושלים", address: "מנחם פרוש 14" },
    { name: "בסט מרקט", address: "נחל דולב 19" },
    { name: "מעדני הים", address: "יצחק רבין 11" },
    { name: "העושר שבטבע", address: "אזור תעשיה הר טוב" },
  ]},
  { city: "מעלה אדומים", stores: [
    { name: "איטליז הקצבים", address: "דרך צמח השדה 76" },
    { name: "מעדני אורי ובניו", address: "קניון עופר" },
    { name: "בשר אדום", address: "סנטר 06, צמח השדה 26" },
    { name: "שום פלפל שמן זית", address: "צמח השדה 29" },
  ]},
  { city: "מבשרת ציון", stores: [
    { name: "סופר זול אקספרס", address: "אורן 47" },
    { name: "סופר דיל", address: "החוצבים 5" },
  ]},
  { city: "אפרת", stores: [
    { name: "מיטליז", address: "נצר ישי 1" },
    { name: "סופר דיל", address: "מרכז מסחרי דקל 8" },
  ]},
  { city: "צומת שילת", stores: [{ name: "קייק אנד בייק", address: "מול הפיראט האדום" }] },
  { city: "צור הדסה", stores: [{ name: "צוריאל מרקט", address: "דפנה 2" }] },
  { city: "נס הרים", stores: [{ name: "מכולת נס הרים" }] },
  { city: "נחושה", stores: [{ name: "בסט מרקט" }] },
  { city: "זכריה", stores: [{ name: "בסט מרקט" }] },
  { city: "מבוא חורון", stores: [{ name: "זליט פנחס צרכנית מבוא חורון" }] },
  { city: "מודיעין", stores: [{ name: "אריאל מיט", address: "חיים ויצמן 7" }] },
  { city: "תל אביב", stores: [
    { name: "קלית יבגי", address: "ראול וינברג 32" },
    { name: "האיטליז של רפי", address: "אבן גבירול 53" },
  ]},
  { city: "ראשון לציון", stores: [{ name: "קלית יבגי", address: "ברשבסקי 17" }] },
  { city: "נס ציונה", stores: [{ name: "קלית יבגי", address: "ויצמן 15" }] },
  { city: "רחובות", stores: [
    { name: "סופר הטוב והמיטיב", address: "יוסף וינר 2" },
    { name: "קנדי מול", address: "בילו" },
  ]},
  { city: "בת ים", stores: [{ name: "שפע אביב", address: "ניסבאום יצחק 44" }] },
  { city: "בני ברק", stores: [{ name: "כל הקפואים", address: "רבי עקיבא 50" }] },
  { city: "גבעתיים", stores: [{ name: "חנות הבשר של דני", address: "מנורה 6" }] },
  { city: "אור יהודה", stores: [{ name: "האחים שקורי", address: "אליהו סעדון 130" }] },
  { city: "לוד", stores: [{ name: "פיצוחי שרעבי", address: "איילון 12" }] },
  { city: "כפר סבא", stores: [{ name: "הקצבייה של נועם טלמור", address: "ירושלים 30" }] },
  { city: "ראש העין", stores: [{ name: "קיבוץ נחשונים", address: "כלבו נחשונים" }] },
  { city: "פרדס חנה-כרכור", stores: [{ name: "מיט אנד פיש", address: "המייסדים 40" }] },
  { city: "אלעד", stores: [{ name: "מעדני איטליז", address: "יהודה הנשיא 94" }] },
  { city: "אריאל", stores: [{ name: "מעדני אריאל", address: "דרך הנחשונים 33" }] },
  { city: "יצהר", stores: [{ name: "הצרכניוש יצהר" }] },
  { city: "באר שבע", stores: [
    { name: "מיני זול אליעד", address: "העליה 11" },
    { name: "אל הבקר ייצור ושיווק", address: "יצחק רגר 185" },
  ]},
  { city: "קרית מלאכי", stores: [{ name: "על העצם", address: "רחוב התעשיה" }] },
  { city: "שדרות", stores: [{ name: "יוסי", phone: "050-343-0343" }] },
];

const getMapsUrl = (storeName: string, address: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${storeName} ${address} ${city}`)}`;

const StoreLocations = () => {
  const [search, setSearch] = useState("");
  const [storeData, setStoreData] = useState<CityGroup[]>(staticStoreData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("get-store-locations");
        if (!error && data && Array.isArray(data) && data.length > 0) {
          setStoreData(data);
        }
      } catch {
        // Use static fallback
      } finally {
        setIsLoading(false);
      }
    };
    fetchStores();
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return storeData;
    const q = search.trim().toLowerCase();
    return storeData
      .map((group) => ({
        ...group,
        stores: group.stores.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.address?.toLowerCase().includes(q) ||
            group.city.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.stores.length > 0);
  }, [search, storeData]);

  const totalStores = storeData.reduce((sum, g) => sum + g.stores.length, 0);

  return (
    <section dir="rtl" className="mt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          נקודות רכישה
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          ניתן להשיג את מוצרי קובה אליהו ב-{totalStores} נקודות מכירה ברחבי הארץ
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10 relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="חיפוש לפי עיר או שם סניף..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-10 rounded-full border-border bg-card text-foreground"
        />
      </div>

      {isLoading && (
        <div className="text-center py-8">
          <Loader2 className="w-6 h-6 text-primary animate-spin mx-auto" />
        </div>
      )}

      {/* Store Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">לא נמצאו תוצאות עבור &quot;{search}&quot;</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((group) => (
            <div
              key={group.city}
              className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
            >
              {/* City Header */}
              <div className="bg-primary px-5 py-3">
                <h3 className="text-lg font-semibold text-primary-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {group.city}
                  <span className="mr-auto text-xs font-normal opacity-80">
                    {group.stores.length} {group.stores.length === 1 ? "סניף" : "סניפים"}
                  </span>
                </h3>
              </div>

              {/* Stores List */}
              <ul className="divide-y divide-border">
                {group.stores.map((store, i) => (
                  <li key={i} className="px-5 py-3 hover:bg-secondary/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-foreground">{store.name}</p>
                        {store.address && (
                          <p className="text-xs text-muted-foreground mt-0.5">{store.address}</p>
                        )}
                        {store.phone && (
                          <a
                            href={`tel:${store.phone.replace(/-/g, "")}`}
                            className="text-xs text-primary font-medium mt-0.5 inline-flex items-center gap-1 hover:underline"
                          >
                            <Phone className="w-3 h-3" />
                            <span dir="ltr">{store.phone}</span>
                          </a>
                        )}
                      </div>
                      {store.address && (
                        <a
                          href={getMapsUrl(store.name, store.address, group.city)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-1.5 rounded-full hover:bg-primary/10 text-primary transition-colors"
                          title="ניווט"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default StoreLocations;
