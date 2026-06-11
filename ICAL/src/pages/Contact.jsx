import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader, SectionBackground } from "../Components/SectionBackground";

export const Contact = () => {
  return (
    <main className="flex-1">
      <SectionBackground>
        <div className="space-y-12">
          <PageHeader
            title="Contact Us"
            subtitle="We'd love to hear from you! Get in touch with us through any of the following methods."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="ical-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-950 mb-3">Email</h3>
              <p className="text-emerald-900/75">
                <a href="mailto:info@icalethbridge.ca" className="text-red-700 hover:underline">
                  igboculturalasslth@gmail.com
                </a>
              </p>
            </div>

            <div className="ical-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-950 mb-3">Phone</h3>
              <p className="text-emerald-900/75">
                <a href="tel:+1-403-308-7650" className="text-red-700 hover:underline">
                  (403) 308-7650
                </a>
              </p>
            </div>

            <div className="ical-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-950 mb-3">Location</h3>
              <p className="text-emerald-900/75">
                863 Keystone Meadows West, Lethbridge, AB
                <br />
                Canada
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto ical-card p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-900/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-amber-200/60 rounded-lg bg-white/80 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-900/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-amber-200/60 rounded-lg bg-white/80 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-900/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-2 border border-amber-200/60 rounded-lg bg-white/80 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="ical-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionBackground>
    </main>
  );
};
