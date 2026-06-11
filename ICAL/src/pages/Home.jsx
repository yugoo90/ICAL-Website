import { HeroSection } from "../Components/HeroSection";
import { SectionBackground } from "../Components/SectionBackground";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionBackground fullHeight={false}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-6">
            Welcome to ICAL
          </h2>
          <div className="ical-accent-bar mx-auto" />
          <p className="text-lg text-emerald-900/75 max-w-3xl mx-auto leading-relaxed">
            The Igbo Cultural Association of Lethbridge is dedicated to preserving and promoting
            Igbo culture, traditions, and values within our community. We bring together people
            of Igbo heritage and friends to celebrate our rich cultural heritage.
          </p>
        </div>
      </SectionBackground>
    </div>
  );
};
