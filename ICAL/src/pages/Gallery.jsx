import { GalleryGrid } from "../Components/Gallery";
import { PageHeader, SectionBackground } from "../Components/SectionBackground";
import { useEffect, useState } from "react";
import {getGalleryImages} from "../services/galleryApi"


export const Gallery = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    let cancelled = false;

    async function loadImages() {

      try {
        const galleryImages = await getGalleryImages();

        if (!cancelled) {
          setImages(galleryImages);
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


