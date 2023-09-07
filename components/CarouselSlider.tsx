"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { SliderProps } from "@/types/table-types";

interface CarouselSliderProps{
    sliderData: SliderProps[]
}


const CarouselSlider: React.FC<CarouselSliderProps> = ({sliderData}) => {
    return (
        <Splide
            hasTrack={false}
            options={{
                type: "loop",
                gap: "1rem;",
                pagination: false,
                arrows: false,
                autoplay: true,
                interval: 5000,
            }}
            className="overflow-hidden rounded-md bg-white dt:container tb:rounded-xl"
            aria-label="slider ">
            <SplideTrack>
                {sliderData.map(({  label, imageUrl}) => (
                    <SplideSlide key={imageUrl}>
                        <Image
                            src={imageUrl}
                            width={1280}
                            height={100}
                            alt={label}
                        />
                    </SplideSlide>
                ))}
                {/* {sliderImages.map(({ title, url }) => (
                    <SplideSlide key={url}>
                        <Image
                            src={url}
                            width={1280}
                            height={100}
                            alt={title}
                        />
                    </SplideSlide>
                ))} */}
            </SplideTrack>

            <div className="splide__progress">
                <div className="splide__progress__bar"></div>
            </div>
        </Splide>
    );
};

export default CarouselSlider;
