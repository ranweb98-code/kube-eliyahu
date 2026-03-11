import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Instagram, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "ראשי", href: "/" },
    { name: "התפריט", href: "/menu" },
    { name: "אודות", href: "/about" },
    { name: "צור קשר", href: "/contact" },
  ];

  return (
    <nav className="relative bg-card/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Right side - Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="תפריט"
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
            }`} />
            <span className={`absolute block w-6 h-0.5 bg-current top-2 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
            }`} />
          </div>
        </button>

        {/* Center logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={logo} alt="קובה אליהו" className="h-14 w-auto rounded-full" />
        </Link>

        {/* Left side - Contact icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/kube_eliyahu?igsh=MXBpM3I1eHNvNXFyOA=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="אינסטגרם"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="tel:0509766643"
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="טלפון"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border z-50">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground hover:text-primary transition-colors text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <a href="tel:0509766643" className="flex items-center gap-2 text-primary font-medium">
                <Phone className="w-4 h-4" />
                <span>0509766643</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
