import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Phone, Instagram, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoreLocations from "@/components/StoreLocations";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              צור קשר
            </h1>
            <p className="text-muted-foreground text-lg">
              נשמח לשמוע מכם ולעזור בכל שאלה או הזמנה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="bg-card rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">טלפון</h3>
              <p className="text-muted-foreground text-sm mb-4">להזמנות ובירורים</p>
              <a href="tel:0509766643">
                <Button className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-6 gap-2">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">050-976-6643</span>
                </Button>
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-card rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">אינסטגרם</h3>
              <p className="text-muted-foreground text-sm mb-4">עקבו אחרינו לעדכונים</p>
              <a
                href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-6 gap-2">
                  <Instagram className="w-4 h-4" />
                  @kube_eliyahu
                </Button>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="mt-8 bg-card rounded-xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">מיקום</h3>
            <p className="text-muted-foreground text-sm mb-4">בואו לבקר אותנו</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=רחוב+הקדר+4+שער+בנימין"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-6 gap-2">
                <MapPin className="w-4 h-4" />
                רחוב הקדר 4, שער בנימין
              </Button>
            </a>
          </div>

          {/* Hours */}
          <div className="mt-12 bg-primary rounded-2xl p-8 md:p-12 text-center">
            <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">
              שעות פעילות
            </h2>
            <div className="space-y-3 text-primary-foreground/90">
              <div className="flex justify-center gap-8">
                <span>ראשון - חמישי</span>
                <span className="font-medium">9:00 - 19:00</span>
              </div>
              <div className="flex justify-center gap-8">
                <span>שישי</span>
                <span className="font-medium">9:00 - 14:00</span>
              </div>
              <div className="flex justify-center gap-8">
                <span>שבת</span>
                <span className="font-medium">סגור</span>
              </div>
          </div>

          <StoreLocations />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
