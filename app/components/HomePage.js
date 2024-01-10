"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import ImageItem from "./ImageItem/ImageItem";

const HomePage = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src="/1.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/TUN_8146.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/TUN_7854.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/55543c9020ba8be4d2ab.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/TUN_7899.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/TUN_801771c83dbf76afafe9.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/TUN_7908.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/e6cc2856347c9f22c66d.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/2de0a2e7b8cd13934adc.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/d8de87e89ac2319c68d3.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/dc3d24d03bfa90a4c9eb.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/323772916bbbc0e599aa.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/f88aef46f96c52320b7d.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/e308d498c9b262ec3ba3.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomePage;
