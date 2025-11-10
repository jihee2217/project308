import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-zmpf7grzod";
import artworks from '@/data/artworks';

interface ArtworkDetailProps {
  onBack: () => void;
  artworkId: number;
}

interface Artwork {
  id: number;
  images: string[];
  captions: string[];
  title: string;
  subtitle: string;
}

// artworks are imported from src/data/artworks

export function ArtworkDetail({
  onBack,
  artworkId,
}: ArtworkDetailProps) {
  const artwork = artworks.find((a) => a.id === artworkId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState(502);
  const [imageWidth, setImageWidth] = useState(793);
  const [direction, setDirection] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  if (!artwork) return null;

  useEffect(() => {
    const updateDimensions = () => {
      if (imgRef.current) {
        // 약간의 딜레이를 주어 이미지가 완전히 렌더링되도록 함
        setTimeout(() => {
          if (imgRef.current) {
            setImageHeight(imgRef.current.height);
            setImageWidth(imgRef.current.width);
          }
        }, 50);
      }
    };

    if (imgRef.current) {
      if (imgRef.current.complete) {
        updateDimensions();
      } else {
        imgRef.current.addEventListener(
          "load",
          updateDimensions,
        );
      }

      return () => {
        if (imgRef.current) {
          imgRef.current.removeEventListener(
            "load",
            updateDimensions,
          );
        }
      };
    }
  }, [currentImageIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? artwork.images.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) =>
      prev === artwork.images.length - 1 ? 0 : prev + 1,
    );
  };

  const getPreviousIndex = () => {
    return currentImageIndex === 0
      ? artwork.images.length - 1
      : currentImageIndex - 1;
  };

  const getNextIndex = () => {
    return currentImageIndex === artwork.images.length - 1
      ? 0
      : currentImageIndex + 1;
  };

  return (
    <div className="bg-black min-h-screen relative">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 h-[88px] z-30">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute left-8 top-1/2 -translate-y-1/2 leading-[1.1] not-italic text-[16px] text-nowrap text-white tracking-[-0.48px] uppercase whitespace-pre cursor-pointer hover:opacity-80 transition-opacity font-bold"
        >
          ← Project 308
        </button>

        {/* Title - Centered */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1.1] not-italic text-[16px] text-center text-nowrap text-white tracking-[-0.48px] whitespace-pre font-bold">
          Installation view, VANITAS
        </p>

        {/* Instagram Button */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <span className="leading-[1.1] not-italic text-[16px] text-white tracking-[-0.48px] font-bold">
            @project308
          </span>
          <div className="bg-white rounded-full size-[32px] flex items-center justify-center">
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g>
                <path d={svgPaths.p115bd300} fill="black" />
                <path d={svgPaths.p2e4f7900} fill="black" />
                <path d={svgPaths.p283ed700} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content - Carousel */}
      <main
        className="relative w-full px-8"
        style={{ paddingTop: "120px" }}
      >
        <div
          className="relative w-full flex items-start justify-center overflow-hidden"
          style={{ height: "502px" }}
        >
          {/* Previous Image - Left */}
          <motion.div
            key={`prev-${getPreviousIndex()}`}
            onClick={handlePrevious}
            className="absolute w-[516px] h-[420px] flex items-center justify-center overflow-hidden cursor-pointer"
            style={{
              right: `calc(50% + ${imageWidth / 2}px + 32px)`,
              top: "41px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={artwork.images[getPreviousIndex()]}
              alt="Previous"
              className="max-w-full max-h-full object-contain"
              style={{ filter: "brightness(0.2)" }}
            />
          </motion.div>

          {/* Current Image (Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[502px] flex items-center justify-center z-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={currentImageIndex}
                ref={imgRef}
                src={artwork.images[currentImageIndex]}
                alt={artwork.title}
                className="object-contain"
                style={{
                  maxWidth: "793px",
                  maxHeight: "502px",
                }}
                custom={direction}
                initial={{
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: direction > 0 ? -300 : 300,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
            </AnimatePresence>
          </div>

          {/* Next Image - Right */}
          <motion.div
            key={`next-${getNextIndex()}`}
            onClick={handleNext}
            className="absolute w-[516px] h-[420px] flex items-center justify-center overflow-hidden cursor-pointer"
            style={{
              left: `calc(50% + ${imageWidth / 2}px + 32px)`,
              top: "41px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={artwork.images[getNextIndex()]}
              alt="Next"
              className="max-w-full max-h-full object-contain"
              style={{ filter: "brightness(0.2)" }}
            />
          </motion.div>
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`caption-${currentImageIndex}`}
            className="absolute left-1/2 -translate-x-1/2 text-center text-[12px] text-[dimgrey] tracking-[-0.36px] leading-[1.4] not-italic"
            style={{
              top: `${120 + (502 - imageHeight) / 2 + imageHeight + 12}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {artwork.captions[currentImageIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Description */}
        <div
          className="fixed left-1/2 -translate-x-1/2 w-[792px] text-center text-[12px] text-[#cfcfcf] tracking-[-0.36px] leading-[1.6] not-italic"
          style={{ bottom: "calc(52px + 6px + 52px)" }}
        >
          <p className="mb-0">
            Meekyoung Shin (b. 1967) lives and works in Seoul
            and London and has completed studies at the Seoul
            National University, Slade School of Art, and Royal
            college of art in London.
          </p>
          <p className="mb-0">
            Meekyoung Shin is internationally renowned for her
            sculptures that probe the mis- and re-translations
            that often emerge when objects of distinct cultural
            and historical specificity are dislocated from their
            origins. Made from soap, her work replicates
            artefacts and works of art, from Asian porcelain
            vases to Greek and Roman sculptures, translating
            between continents, cultures, and centuries in the
            process.
          </p>
          <p>
            Shin is recognized for her iconic Translation Series
            (2004-ongoing) and Toilet Series, installations of
            usable soap sculptures in public bathrooms, which
            are subsequently exhibited in the gallery context in
            their eroded form.ﾠ
          </p>
        </div>

        {/* Navigator */}
        <div
          className="fixed left-1/2 -translate-x-1/2 flex items-center gap-[14px]"
          style={{ bottom: "52px" }}
        >
          {artwork.images.map((_, index) => (
            <div
              key={index}
              className={`bg-white rounded-[4px] transition-all ${
                index === currentImageIndex
                  ? "w-[52px] h-[6px] opacity-100"
                  : "size-[6px] opacity-40"
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}