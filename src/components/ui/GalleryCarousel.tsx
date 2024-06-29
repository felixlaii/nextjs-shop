import React, { createRef, useState } from "react";
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
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = PhotoGallery.length;

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

  const indicatorClicked = (index: number) => {
    scrollToImage(index);
  };

  const renderIndicators = () => {
    return PhotoGallery.map((img, i) => (
      <button
        key={i}
        onClick={() => indicatorClicked(i)}
        className={clsx(
          "h-3 w-3 mx-1 rounded-full bg-pink-400 cursor-pointer",
          currentImage === i && "bg-zinc-300"
        )}
        aria-label={`Image ${i + 1}`}
      />
    ));
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeftButton ? "left-80" : "right-80"}`}
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
        "flex flex-col justify-center items-center w-full mx-5 lg:mx-auto pb-8"
      )}
    >
      <div className={clsx("relative mt-12")}>
        <div className={clsx("flex overflow-x-hidden snap-mandatory snap-x")}>
          {sliderControl(true)}
          {PhotoGallery.map((img, i) => (
            <div
              className="flex justify-center w-full flex-shrink-0"
              key={`${img}-${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              <Image
                width={200}
                height={200}
                src={img.photo}
                className={clsx(
                  "object-cover items-center justify-center w-[40rem] h-[30rem] rounded-md opacity-80"
                )}
                alt="macaron"
              />
            </div>
          ))}
          {sliderControl()}
        </div>
        <div className="flex justify-center mt-4">{renderIndicators()}</div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
