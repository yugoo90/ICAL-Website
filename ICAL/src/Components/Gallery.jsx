import { useCallback, useEffect, useRef, useState } from "react";

function itemKey(img, index) {
  return String(img.id ?? img.url ?? index);
}

function GalleryImage({ img, index, onBroken }) {
  const alt = img.title?.trim() ? img.title : `Gallery photo ${index + 1}`;

  return (
    <div
      className="overflow-hidden rounded-lg shadow-md bg-white"
    >
      <img
        src={img.url}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        onError={onBroken}
      />

      {img.title ? (
        <p className="text-sm text-gray-600 px-2 py-2 truncate" title={img.title}>
          {/* {img.title} */}
          "Images from Igbo Day 2025!!"
        </p>
      ) : null}
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
      <p className="text-center py-12 text-gray-500">No images available.</p>
    );
  }

  const visibleCount = images.filter((img, index) => !broken[itemKey(img, index)]).length;

  if (visibleCount === 0) {
    return (
      <p className="text-center py-12 text-gray-500">
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
