import { Link, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FloatingStoresButton = () => {
  const { t, lang, dir } = useLanguage();
  const location = useLocation();

  // Hide on the store-locations page itself
  if (location.pathname === "/store-locations") return null;

  const sideClass = dir === "rtl" ? "left-4 md:left-6" : "right-4 md:right-6";

  return (
    <Link
      to="/store-locations"
      aria-label={t.contact.quickStoresFloating}
      className={`fixed ${sideClass} bottom-5 md:bottom-8 z-40 group flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl rounded-full pl-4 pr-4 md:pl-5 md:pr-5 py-3 md:py-3.5 transition-all duration-300 hover:scale-105 animate-fade-in`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground/60 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-foreground" />
      </span>
      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
      <span className="text-sm md:text-base font-semibold whitespace-nowrap">
        {t.contact.quickStoresFloating}
      </span>
    </Link>
  );
};

export default FloatingStoresButton;
