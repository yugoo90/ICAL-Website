import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <main className="flex-1 pt-16">
      <section className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-white py-12 lg:py-16 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
              <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto">
                We'd love to hear from you! Get in touch with us through any of the following methods.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/80 rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@icalethbridge.ca" className="text-red-600 hover:underline">
                    info@icalethbridge.ca
                  </a>
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+1-403-000-0000" className="text-red-600 hover:underline">
                    (403) 000-0000
                  </a>
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
                <p className="text-gray-700">
                  Lethbridge, AB
                  <br />
                  Canada
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-2xl mx-auto bg-white/80 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
