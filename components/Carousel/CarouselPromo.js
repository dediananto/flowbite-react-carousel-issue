import React from "react";
// import "flowbite";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselPromo(props) {
  return (
    <>
      <Carousel slideInterval={5000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
      <p className="border-b border-red-800 mb-3">
        Carousel with 5 images, check on image order. also check on slide 1,4,5
      </p>
      <Carousel slideInterval={5000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
      </Carousel>
      <p className="border-b border-red-800 mb-3">
        Carousel with 2 images, arrow control not work, not change the slide
      </p>
      <Carousel slideInterval={5000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
      </Carousel>
      <p className="border-b border-red-800 mb-3">
        Carousel with 4 images, last slide is same like previous slide
      </p>
      <Carousel slideInterval={5000}>
        <div className="self-stretch h-full w-full">
          <Image
            w="full"
            h="auto"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="self-stretch h-full w-full">
          <Image
            w="full"
            h="auto"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="self-stretch h-full w-full">
          <Image
            w="full"
            h="auto"
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
      <p className="border-b border-red-800 mb-3">
        Carousel support for next images. arrow control not work if images less
        than 4 (with img or image)
      </p>
    </>
  );
}
