"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { sliderImages } from "@/constant";

const CarouselSlider = () => {
  return (
    <Splide
      className="mt-8 overflow-hidden rounded-md dt:container tb:rounded-xl"
      aria-label="slider ">
      {sliderImages.map(({ title, url }) => (
        <SplideSlide key={url}>
          <Image src={url} width={1280} height={100} alt={title} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CarouselSlider;
