import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useLanguage } from "@/i18n/LanguageContext";
import Tilt3D from "@/components/Tilt3D";

const VideoTeaser = () => {
  const { dir } = useLanguage();

  return (
    <section className="w-full py-16 px-6 bg-background" dir={dir}>
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center">
          <Tilt3D className="max-w-[420px] mx-auto rounded-3xl" max={8} scale={1.02}>
            <video
              src="/videos/kubbeh-2.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </Tilt3D>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default VideoTeaser;
