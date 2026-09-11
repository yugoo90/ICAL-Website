import { HeroSection } from "../Components/HeroSection";
import { SectionBackground } from "../Components/SectionBackground";
import { useEffect, useState } from "react";
import {getEvents} from "../services/eventsApi";
import { EventCard } from "../Components/EventCard";



export const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function loadEvents() {
      try {
        const eventsData = await getEvents();
        if(!cancelled) {
          setEvents(eventsData);
        }
      } catch (e) {
        if(!cancelled) {
          setError(e.message ?? "Failed to load events")
        }
      } finally {
        if(!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEvents();

    return () => {
      cancelled = true;
    };

  }, []);

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
      <SectionBackground fullHeight={false}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            Upcoming Events
          </h2>
          {loading && (
            <p className="text-emerald-800/60">
              Loading events...
            </p>
          )}

          {error && (
            <p className="text-red-700">
              {error}
            </p>
          )}
          {!loading && !error && events.length === 0 && (
            <p className="text-emerald-800/60">
              No upcoming events found.
            </p>
          )}
          {!loading && !error && events.length > 0 && (
            <div>
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </SectionBackground>
    </div>
  );
};