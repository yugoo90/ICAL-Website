export const About = () => {
  return (
    <main className="flex-1 pt-16">
      <section className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-white py-12 lg:py-16 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                About Us
              </h1>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>

            {/* Mission Section */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Igbo Cultural Association of Lethbridge (ICAL) is a non-profit organization 
                committed to preserving, promoting, and celebrating Igbo culture, traditions, and 
                values. We serve as a bridge connecting the Igbo community in Lethbridge and 
                surrounding areas, fostering unity, cultural awareness, and mutual support.
              </p>
            </div>

            {/* Values Section */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Cultural Preservation</h3>
                  <p className="text-gray-700">
                    We are dedicated to maintaining and passing down Igbo traditions, language, 
                    and customs to future generations.
                  </p>
                </div>
                <div className="bg-white/80 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Community Unity</h3>
                  <p className="text-gray-700">
                    We bring together people of Igbo heritage and friends to build a strong, 
                    supportive community network.
                  </p>
                </div>
                <div className="bg-white/80 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Education & Awareness</h3>
                  <p className="text-gray-700">
                    We promote understanding and appreciation of Igbo culture within the broader 
                    Canadian community.
                  </p>
                </div>
                <div className="bg-white/80 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Mutual Support</h3>
                  <p className="text-gray-700">
                    We provide assistance and support to members of our community, especially 
                    newcomers and those in need.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose Section */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                What We Do
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ICAL organizes cultural events, celebrations, and educational programs that showcase 
                Igbo traditions, music, dance, and cuisine. We provide a platform for community members 
                to connect, share experiences, and celebrate our shared heritage. Through various 
                initiatives, we contribute to the multicultural fabric of Lethbridge while keeping 
                our Igbo identity vibrant and alive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
