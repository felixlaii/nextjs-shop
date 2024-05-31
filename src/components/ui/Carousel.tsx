import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SliderData } from "../../../public/data/carousel-images"; // Adjust the path as needed

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      let elem = carouselRef.current as unknown as HTMLDivElement;
      if (elem) {
        let { width, height } = elem.getBoundingClientRect();
        setCarouselSize({ width, height });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Update size on window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === SliderData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center min-h-screen w-full bg-gray-20">
      <div className="relative h-[45rem] w-[60rem] overflow-hidden rounded-md">
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentImage * carouselSize.width}px)`,
          }}
          className="absolute flex h-full w-full transition-transform duration-1000"
        >
          {SliderData.map((image, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none opacity-40"
                alt={`Slide ${i}`}
                src={image.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
