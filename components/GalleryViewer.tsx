"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryPhotos, GalleryPhoto } from "@/data/gallery";
import { X } from "lucide-react";

export default function GalleryViewer({
  initialCategory = "all",
  showFilters = true,
  limit,
}: {
  initialCategory?: string;
  showFilters?: boolean;
  limit?: number;
}) {
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = galleryPhotos
    .filter((photo) => activeFilter === "all" || photo.category === activeFilter)
    .slice(0, limit ? limit : galleryPhotos.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {showFilters && (
        <div className="gallery-filter-bar">
          <button
            className={`gallery-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Photos
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === "concerts" ? "active" : ""}`}
            onClick={() => setActiveFilter("concerts")}
          >
            Concerts & Live
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === "portraits" ? "active" : ""}`}
            onClick={() => setActiveFilter("portraits")}
          >
            Portraits & Robes
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === "tours" ? "active" : ""}`}
            onClick={() => setActiveFilter("tours")}
          >
            Tours & Orchestra
          </button>
        </div>
      )}

      {/* 3-Column Clean Grid */}
      <div className="gallery-three-grid">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-clean-item"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={450}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="gallery-clean-overlay">
              <div>
                <h4>{photo.title}</h4>
                <p>{photo.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="lightbox-modal"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo"
            >
              <X size={30} />
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1000}
              height={750}
              className="lightbox-img"
              style={{ objectFit: "contain" }}
            />
            <div className="lightbox-caption">
              {selectedPhoto.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
