import { useCallback, useState } from "react";

function itemKey(img, index) {
  return String(img.id ?? img.url ?? index);
}

function GalleryImage({ img, index, onBroken }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="ical-card overflow-hidden"
    >
      <img
        src={img.url}
        alt="Images from Igbo Day 2025!!"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
        onError={onBroken}
        onClick={() => setIsOpen(true)}
      />

      {img.title ? (
        <p className="text-sm text-emerald-900/70 px-2 py-2 truncate" title={img.title}>
          {/* {img.title} */}
          "Images from Igbo Day 2025!!"
        </p>
      ) : null}

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-hidden" onClick={() => setIsOpen(false)}>
          <img 
            src={img.url} 
            alt="Gallery Image" 
            className="max-w-full max-h-full object-contain" 
            />
        </div>
      )}
    </div>
  );
}

export function GalleryGrid({ images = [] }) {
  const [broken, setBroken] = useState({});

  const markBroken = useCallback((key) => {
    setBroken((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }, []);

  if (!images.length) {
    return (
      <p className="text-center py-12 text-emerald-800/60">No images available.</p>
    );
  }

  const visibleCount = images.filter((img, index) => !broken[itemKey(img, index)]).length;

  if (visibleCount === 0) {
    return (
      <p className="text-center py-12 text-emerald-800/60">
        Images could not be loaded. Check that URLs are valid HTTPS links.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, index) => {
        const key = itemKey(img, index);
        if(broken[key]) {
          return null;
        }
        return (
          <GalleryImage
            key={key}
            img={img}
            index={index}
            onBroken={() => markBroken(key)}
          />
        );
      })}
    </div>
  );
}
