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
  return <div></div>;
};

export default Carousel;
