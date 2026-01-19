import bridgeImg from "../assets/images/Lethbridge-bridge.jpeg";

export const HeroSection = () => {
  return (
    <section 
      className="relative w-screen h-[80vh] sm:h-[85vh] pt-16 overflow-hidden">
      <img 
        alt="Lethbridge Bridge"
        src={bridgeImg} 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10">
        <div className="relative z-20 container mx-auto max-w-7xl px-4 py-16 h-full flex items-center">
          <h1 className="text-slate-50 text-5xl sm:text-6xl lg:text-7xl font-bold drop-shadow-lg">
            <span className="opacity-0 animate-fade-in">
              Igbo Cultural{" "}
            </span>
            <span className="opacity-0 animate-fade-in-delay-1">
              Association of
            </span>
            <br />
            <span className="text-red-400 ml-2 opacity-0 animate-fade-in-delay-2">
              Lethbridge
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
