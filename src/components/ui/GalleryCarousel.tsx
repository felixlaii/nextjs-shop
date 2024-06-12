import React, { createRef, useState } from "react";
import ImageGrid from "./ImageGrid";
import clsx from "clsx";
import Image from "next/image";
import { PhotoGallery } from "../../../public/data/photo-gallery";

const GalleryCarousel = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const refs = PhotoGallery.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = PhotoGallery.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-[calc(10% - 10px)] mx-5 lg:mx-auto pb-8"
      )}
    >
      <div className={clsx("relative mt-12")}>
        <div className={clsx("flex overflow-x-hidden snap-mandatory snap-x")}>
          {sliderControl(true)}
          {PhotoGallery.map((img, i) => (
            <div
              className="flex justify-center w-full flex-shrink-0"
              key={`${img} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              <Image
                width={200}
                height={200}
                src={img.photo}
                className={clsx(
                  "object-cover items-center justify-center w-1/2 h-96 rounded-md opacity-80"
                )}
                alt="macaron"
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <ImageGrid />
      </div>
    </div>
  );
};

export default GalleryCarousel;
