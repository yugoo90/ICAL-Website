import { GalleryGrid } from "../Components/Gallery";
import { PageHeader, SectionBackground } from "../Components/SectionBackground";
import { useEffect, useState } from "react";

const Gallery_API_URL = import.meta.env.VITE_GALLERY__API_URL;

function normalizeGalleryItem(item) {
  return {
    ...item,
    url: `https://lh3.googleusercontent.com/d/${item.id}=w1000`,
  };
}

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!Gallery_API_URL) {
      setError("Gallery API URL is not configured");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadImages() {
      try {
        const response = await fetch(Gallery_API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid gallery data.");
        }

        if (!cancelled) {
          setImages(data.map(normalizeGalleryItem));
        }
      } catch (e) {
        if (!cancelled) {
          setError(e.message ?? "Failed to load gallery");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadImages();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="flex-1">
      <SectionBackground>
        <PageHeader title="Igbo Day 2025" />
        {loading && (
          <p className="text-center text-emerald-800/60">Loading Gallery...</p>
        )}
        {error && <p className="text-center text-red-700">{error}</p>}
        {!loading && !error && <GalleryGrid images={images} />}
      </SectionBackground>
    </main>
  );
};
