import { useCallback, useState } from "react";

function itemKey(img, index) {
  return String(img.id ?? img.url ?? index);
}

function GalleryImage({ img, onBroken }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="ical-card overflow-hidden"
      >
        <img
          src={img.url}
          alt={img.title ||"Igbo Day gallery image"}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="block w-full h-auto max-h-[70vh] object-contain bg-black/5 cursor-pointer"
          onError={onBroken}
          onClick={() => setIsOpen(true)}
        />

        {img.title ? (
          <p className="text-sm text-emerald-900/70 px-2 py-2 truncate" title={img.title}>
            {img.title}
          </p>
        ) : null}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-hidden" onClick={() => setIsOpen(false)}>
          <img 
            src={img.url} 
            alt="Gallery Image" 
            className="max-w-full max-h-full object-contain" 
          />
        </div>
      )}
    </>
  );
}

export function GallerySlider({ images = [] }) {
  const [broken, setBroken] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const markBroken = useCallback((key) => {
    setBroken((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }, []);

  if (!images.length) {
    return (
      <p className="text-center py-12 text-emerald-800/60">No images available.</p>
    );
  }

  const visibleImages = images.map((img, index) => ({
    img,
    key: itemKey(img, index),
  })).filter(({key}) => !broken[key]);

  if (visibleImages.length === 0) {

    return (
      <p className="text-center py-12 text-emerald-800/60">
        Images could not be loaded. Check that URLs are valid HTTPS links.
      </p>
    );
  }

  const safeCurrentIndex = Math.min(
    currentIndex,
    visibleImages.length - 1,
  );
  const currentSlide = visibleImages[safeCurrentIndex];

  function showPrevious() {
    setCurrentIndex((index) => {
      const safeIndex = Math.min(index, visibleImages.length - 1);

      return safeIndex === 0
        ? visibleImages.length - 1
        : safeIndex - 1;
    });
  }

  function showNext() {
    setCurrentIndex((index) => {
      const safeIndex = Math.min(index, visibleImages.length - 1);

      return (safeIndex + 1) % visibleImages.length;
    });
  }

  function handleKeyDown(event) {
    if(event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }
    if(event.key == 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <div
      className="mx-auto max-w-3xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Igbo Day 2025 photo gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <GalleryImage
        key={currentSlide.key}
        img={currentSlide.img}
        onBroken={() => markBroken(currentSlide.key)}
      />
      <div className="mt-4 flex items-center justify-between">

        <button
          type="button"
          onClick={showPrevious}
          disabled={visibleImages.length === 1}
          aria-label="Show previous gallery image"
          className="ical-btn disables:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <p className="text-sm text-emerald-900/70">
          {safeCurrentIndex + 1} / {visibleImages.length}
        </p>
        <button
          type="button"
          onClick={showNext}
          disabled={visibleImages.length === 1}
          aria-label="Show next gallery image"
          className="ical-btn disables:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
