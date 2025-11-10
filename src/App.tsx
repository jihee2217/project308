import { useState } from 'react';
import { GalleryGrid } from './components/GalleryGrid';
import { ArtworkDetail } from './components/ArtworkDetail';

export default function App() {
  const [currentView, setCurrentView] = useState<'gallery' | 'detail'>('gallery');
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  const handleArtworkClick = (artworkId: number) => {
    setSelectedArtwork(artworkId);
    setCurrentView('detail');
  };

  const handleBack = () => {
    setCurrentView('gallery');
    setSelectedArtwork(null);
  };

  return (
    <div className="w-full h-screen overflow-auto">
      {currentView === 'gallery' ? (
        <GalleryGrid onArtworkClick={handleArtworkClick} />
      ) : selectedArtwork != null ? (
        <ArtworkDetail onBack={handleBack} artworkId={selectedArtwork} />
      ) : null}
    </div>
  );
}
