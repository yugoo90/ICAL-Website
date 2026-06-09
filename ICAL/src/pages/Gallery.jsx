import { GalleryGrid } from "../Components/Gallery";

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

    if(!Gallery_API_URL) {

      setError("Gallery API URL is not configured");

      setLoading(false);

      return;

    }

    let cancelled = false;

    async function loadImages() {

      try{

        const response = await fetch(Gallery_API_URL);

        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if(!Array.isArray(data)) {

          throw new Error("Invalid gallery data.");

        }

        if(!cancelled) {
          setImages(data.map(normalizeGalleryItem));
        }

      } catch(e) {
        
        if(!cancelled) {
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
    <main className="flex-1 pt-16">
      <section className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-white py-12 lg:py-16 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Igbo Day 2025</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>
          {loading && (
            <p className="text-center text-gray-500">Loading Gallery...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && <GalleryGrid images={images} />}
        </div>
      </section>
    </main>
  );
};


