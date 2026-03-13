import heroImage from "@/assets/kubbeh-1.jpg";

const LargeHero = () => {
  return (
    <section className="relative w-full mb-0 overflow-hidden">
      <div className="relative w-full h-[100vh] min-h-[600px]">
        <img
          src={heroImage}
          alt="קובה ביתית מסורתית"
          className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        
      </div>
    </section>
  );
};

export default LargeHero;
