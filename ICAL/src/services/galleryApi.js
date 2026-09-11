const Gallery_API_URL = import.meta.env.VITE_GALLERY__API_URL;

function normalizeGalleryItem(item) {

    return {
      ...item,
  
      url: `https://lh3.googleusercontent.com/d/${item.id}=w1000`,
   };
  
}
export async function getGalleryImages() {
    if(!Gallery_API_URL) {
        throw new Error("Gallery API URL is not configured");
    }

    const response = await fetch(Gallery_API_URL);

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if(!Array.isArray(data)) {
        throw new Error("Invalid gallery data.");
    }

    return data.map(normalizeGalleryItem);
}