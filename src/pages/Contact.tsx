import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import StoreLocations from "@/components/StoreLocations";
import { Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <StoreLocations />

          {/* Contact Info Strip */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4" dir="rtl">
            <a href="tel:0509766643" className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:border-primary/30 transition-colors">
              <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-serif text-base font-semibold text-foreground mb-1">טלפון</h3>
              <span dir="ltr" className="text-sm text-muted-foreground">050-976-6643</span>
            </a>

            <a
              href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <Instagram className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-serif text-base font-semibold text-foreground mb-1">אינסטגרם</h3>
              <span className="text-sm text-muted-foreground">@kube_eliyahu</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=רחוב+הקדר+4+שער+בנימין"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-serif text-base font-semibold text-foreground mb-1">מיקום</h3>
              <span className="text-sm text-muted-foreground">רחוב הקדר 4, שער בנימין</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
