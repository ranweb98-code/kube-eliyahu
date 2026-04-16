import { Phone, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-16 pb-6 px-6 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="text-center md:text-right">
            <img src={logo} alt="קובה אליהו" className="h-20 w-auto rounded-full mb-4 mx-auto md:mx-0" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              טעמים מבית סבתא — קובה ביתית מסורתית בהכנה אישית ובאהבה
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="אינסטגרם">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075824275094" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="פייסבוק">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg font-semibold mb-4">ניווט מהיר</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <Link to="/" className="block hover:text-primary-foreground transition-colors">ראשי</Link>
              <Link to="/products" className="block hover:text-primary-foreground transition-colors">המוצרים</Link>
              <Link to="/about" className="block hover:text-primary-foreground transition-colors">אודות</Link>
              <Link to="/contact" className="block hover:text-primary-foreground transition-colors">צור קשר</Link>
              <Link to="/store-locations" className="block hover:text-primary-foreground transition-colors">נקודות רכישה</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg font-semibold mb-4">צור קשר</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a href="tel:0509766643" className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span dir="ltr">050-976-6643</span>
              </a>
              <a href="tel:052092863" className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span dir="ltr">052-092-863</span>
              </a>
              <a href="mailto:kube8eliyahu@gmail.com" className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>kube8eliyahu@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <span>@kube_eliyahu</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100075824275094"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4 flex-shrink-0" />
                <span>קובה אליהו</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg font-semibold mb-4">שעות פעילות</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>ראשון - חמישי: 09:00 - 15:00</p>
              <p>שישי: סגור</p>
              <p>שבת: סגור</p>
            </div>
            <div className="mt-4">
              <Link to="/store-locations" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                <MapPin className="w-4 h-4" />
                נקודות רכישה
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} קובה אליהו. כל הזכויות שמורות. כשר בשרי.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
