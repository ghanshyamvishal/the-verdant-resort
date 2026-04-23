import { ZoomIn } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const gridClasses = [
  "row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
];

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  const gridImages = images.slice(0, 6);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]">
      {gridImages.map((img, i) => (
        <button
          key={img.src}
          type="button"
          data-ocid={`gallery.item.${i + 1}`}
          aria-label={`View ${img.alt}`}
          className={`relative overflow-hidden rounded-resort-lg cursor-pointer group ${gridClasses[i] ?? ""} p-0 border-0 bg-transparent`}
          onClick={() => onImageClick(i)}
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
  );
}
