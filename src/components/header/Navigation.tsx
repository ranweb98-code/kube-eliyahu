import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = !isHome || isScrolled || isMobileMenuOpen;

  const navItems = [
    { name: "ראשי", href: "/" },
    { name: "המוצרים", href: "/products" },
    { name: "אודות", href: "/about" },
    { name: "צור קשר", href: "/contact" },
    { name: "נקודות רכישה", href: "/store-locations" },
  ];

  return (
    <nav
      className={`relative transition-all duration-500 ${
        showSolid
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-6">
        {/* Right side - Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`story-link transition-colors text-sm font-medium ${
                showSolid
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="תפריט"
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
              showSolid ? "bg-foreground" : "bg-white"
            } ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`} />
            <span className={`absolute block w-6 h-0.5 top-2 transition-all duration-300 ${
              showSolid ? "bg-foreground" : "bg-white"
            } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
              showSolid ? "bg-foreground" : "bg-white"
            } ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`} />
          </div>
        </button>

        {/* Center logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-1/2">
          <img
            src={logo}
            alt="קובה אליהו"
            className={`rounded-full transition-all duration-500 shadow-lg ${
              showSolid
                ? "h-20 w-20 -translate-y-1/2 ring-4 ring-card/80"
                : "h-28 w-28 translate-y-[-30%] ring-4 ring-white/30"
            }`}
          />
        </Link>

        {/* Left side - Contact icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100075824275094"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-colors hover-scale ${
              showSolid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
            aria-label="פייסבוק"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA=="
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-colors hover-scale ${
              showSolid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
            aria-label="אינסטגרם"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="tel:0509766643"
            className={`p-2 transition-colors hover-scale ${
              showSolid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
            aria-label="טלפון"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border z-50 animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground hover:text-primary transition-colors text-lg font-medium py-2 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border animate-fade-in flex items-center gap-4" style={{ animationDelay: "320ms", animationFillMode: "both" }}>
              <a href="tel:0509766643" className="flex items-center gap-2 text-primary font-medium">
                <Phone className="w-4 h-4" />
                <span dir="ltr">050-976-6643</span>
              </a>
              <a href="tel:052092863" className="flex items-center gap-2 text-primary font-medium">
                <Phone className="w-4 h-4" />
                <span dir="ltr">052-092-863</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
