import { X, ZoomIn } from "lucide-react";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridImages = images.slice(0, 6);

  const gridClasses = [
    "row-span-2",
    "col-span-1",
    "col-span-1",
    "col-span-1",
    "col-span-1",
    "col-span-1",
  ];

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]">
        {gridImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            data-ocid={`gallery.item.${i + 1}`}
            aria-label={`View ${img.alt}`}
            className={`relative overflow-hidden rounded-resort-lg cursor-pointer group ${gridClasses[i] ?? ""} p-0 border-0 bg-transparent`}
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-smooth group-hover:scale-110"
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth"
              style={{ backgroundColor: "rgba(44,95,46,0.5)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
              >
                <ZoomIn size={20} style={{ color: "var(--color-primary)" }} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
        >
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <img
            src={gridImages[lightboxIndex]?.src}
            alt={gridImages[lightboxIndex]?.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-resort-lg"
          />
        </div>
      )}
    </>
  );
}
