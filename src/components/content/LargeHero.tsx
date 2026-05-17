import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/kubbeh-1.jpg";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import KubbehSphere3D from "./KubbehSphere3D";

const LargeHero = () => {
  const { t, dir } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full mb-0 overflow-hidden" dir={dir} ref={ref}>
      <div className="relative w-full h-[100vh] min-h-[600px] [perspective:1200px]">
        {/* Parallax background */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(${1 + scrollY * 0.0004})`,
          }}
        >
          <img
            src={heroImage}
            alt={t.hero.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vignette + depth layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(0_0%_0%/0.55)_100%)]"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        />

        {/* Floating 3D kubbeh — depth foreground */}
        <div
          className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 hidden md:block pointer-events-auto"
          style={{
            transform: `translate3d(0, calc(-50% + ${scrollY * -0.15}px), 0) rotate(${scrollY * 0.05}deg)`,
            filter: "drop-shadow(0 30px 60px hsl(160 45% 10% / 0.55))",
          }}
        >
          <KubbehSphere3D />
        </div>

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{
            transform: `translate3d(0, ${scrollY * -0.2}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 animate-hero-slide-up tracking-tight"
            style={{
              animationDelay: "0.2s",
              textShadow: "0 8px 40px hsl(0 0% 0% / 0.6)",
            }}
          >
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light animate-hero-slide-up" style={{ animationDelay: "0.5s" }}>
            {t.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-white/70 mb-8 max-w-md animate-hero-slide-up" style={{ animationDelay: "0.7s" }}>
            {t.hero.description}
          </p>
          <div className="animate-hero-slide-up" style={{ animationDelay: "0.9s" }}>
            <Link to="/store-locations">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-semibold gap-2 shadow-2xl hover:shadow-accent/40 hover:scale-105 transition-all">
                <MapPin className="w-5 h-5" />
                {t.hero.orderNow}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] animate-pulse">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default LargeHero;
