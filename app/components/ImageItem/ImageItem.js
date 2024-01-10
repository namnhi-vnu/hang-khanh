"use client";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/react";
import "swiper/css";
const ImageItem = () => {
    return (
        <>
            <SwiperSlide>
                <Image
                    src="/LEEL9452.JPG"
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    alt=""
                />
            </SwiperSlide>
        </>
    );
};

export default ImageItem;
