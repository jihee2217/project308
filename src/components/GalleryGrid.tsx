import React from 'react';
import artworks from '../data/artworks';

interface GalleryGridProps {
  onArtworkClick: (artworkId: number) => void;
}

export function GalleryGrid({ onArtworkClick }: GalleryGridProps) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header - Fixed */}
      <header className="sticky top-0 z-10 bg-black px-8 py-8">
        <p className="leading-[1.1] not-italic text-[16px] text-nowrap text-white tracking-[-0.48px] uppercase whitespace-pre font-bold">
          Project 308
        </p>
      </header>

      {/* Gallery Grid - Scrollable */}
      <main className="flex-1 px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[120px]">
          {artworks.map((artwork) => (
            <button
              key={artwork.id}
              type="button"
              className="cursor-pointer group text-left p-0 border-0 bg-transparent"
              onClick={() => onArtworkClick(artwork.id)}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onArtworkClick(artwork.id);
                }
              }}
              aria-label={`Open artwork ${artwork.id}: ${artwork.title}`}
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden mb-3">
                <img 
                  alt={artwork.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105" 
                  src={artwork.images?.[0]}
                  loading="lazy"
                />
              </div>
              
              {/* Info */}
              <div className="space-y-1">
                <p className="leading-[1.4] not-italic text-[12px] text-nowrap text-white tracking-[-0.36px] whitespace-pre font-bold">
                  {artwork.title}
                </p>
                <p className="leading-[1.4] not-italic text-[#cfcfcf] text-[10px] text-nowrap tracking-[-0.3px] whitespace-pre">
                  {artwork.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
