import { PageHeader, SectionBackground } from "../Components/SectionBackground";

export const About = () => {
  return (
    <main className="flex-1">
      <SectionBackground>
        <div className="space-y-12">
          <PageHeader title="About Us" />

          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
              Our Mission
            </h2>
            <p className="text-lg text-emerald-900/75 leading-relaxed">
              The Igbo Cultural Association of Lethbridge (ICAL) is a non-profit organization
              committed to preserving, promoting, and celebrating Igbo culture, traditions, and
              values. We serve as a bridge connecting the Igbo community in Lethbridge and
              surrounding areas, fostering unity, cultural awareness, and mutual support.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="ical-card p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Cultural Preservation</h3>
                <p className="text-emerald-900/75">
                  We are dedicated to maintaining and passing down Igbo traditions, language,
                  and customs to future generations.
                </p>
              </div>
              <div className="ical-card p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Community Unity</h3>
                <p className="text-emerald-900/75">
                  We bring together people of Igbo heritage and friends to build a strong,
                  supportive community network.
                </p>
              </div>
              <div className="ical-card p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Education & Awareness</h3>
                <p className="text-emerald-900/75">
                  We promote understanding and appreciation of Igbo culture within the broader
                  Canadian community.
                </p>
              </div>
              <div className="ical-card p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Mutual Support</h3>
                <p className="text-emerald-900/75">
                  We provide assistance and support to members of our community, especially
                  newcomers and those in need.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
              What We Do
            </h2>
            <p className="text-lg text-emerald-900/75 leading-relaxed">
              ICAL organizes cultural events, celebrations, and educational programs that showcase
              Igbo traditions, music, dance, and cuisine. We provide a platform for community members
              to connect, share experiences, and celebrate our shared heritage. Through various
              initiatives, we contribute to the multicultural fabric of Lethbridge while keeping
              our Igbo identity vibrant and alive.
            </p>
          </div>
        </div>
      </SectionBackground>
    </main>
  );
};
