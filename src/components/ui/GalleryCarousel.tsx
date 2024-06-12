import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { PhotoGallery } from "../../../public/data/photo-gallery";
const GalleryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla mx-auto mt-12 max-w-lg">
      <div className="embla__viewport h-56 border" ref={emblaRef}>
        <div className="embla__container h-full">
          {PhotoGallery.map((photo, i) => (
            <div
              className="embla__slide flex items-center justify-center"
              key={i}
            >
              <Image
                src={photo.photo}
                width={100}
                height={100}
                alt={`gallery ${i}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-between">
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;
