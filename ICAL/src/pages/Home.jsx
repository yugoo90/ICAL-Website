import { HeroSection } from "../Components/HeroSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-white py-12 lg:py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Welcome to ICAL
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Igbo Cultural Association of Lethbridge is dedicated to preserving and promoting 
              Igbo culture, traditions, and values within our community. We bring together people 
              of Igbo heritage and friends to celebrate our rich cultural heritage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
