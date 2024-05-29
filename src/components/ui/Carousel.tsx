import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import { SliderData } from "../../../public/data/carousel-images";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({ width, height });
    }
  }, []);
  return (
    <div>
      <div className="relative h-60 w-80 overflow-hidden rounded-md">
        <div
          ref={carouselRef}
          style={{
            left: -currentImage * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {SliderData.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
