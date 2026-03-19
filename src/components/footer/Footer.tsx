import { Phone, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-12 pb-4 px-6 mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="text-center md:text-right">
            <img src={logo} alt="קובה אליהו" className="h-20 w-auto rounded-full mb-4 mx-auto md:mx-0" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              טעמים מבית סבתא — קובה ביתית מסורתית בהכנה אישית ובאהבה
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg font-semibold mb-4">צור קשר</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a href="tel:0509766643" className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span dir="ltr">050-976-6643</span>
              </a>
              <a
                href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-primary-foreground transition-colors">
                
                <Instagram className="w-4 h-4" />
                <span>@kube_eliyahu</span>
              </a>
              







              
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg font-semibold mb-4">שעות פעילות</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>ראשון - חמישי: 9:00 - 19:00</p>
              <p>שישי: 9:00 - 14:00</p>
              <p>שבת: סגור</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} קובה אליהו. כל הזכויות שמורות. כשר בשרי.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;