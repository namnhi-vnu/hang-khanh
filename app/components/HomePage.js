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
                        src="/e6cc2856347c9f22c66d.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/cbd2635b6e62c53c9c73.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/5af74bc847f1ecafb5e0.jpg"
                        width={1000}
                        height={1000}
                        className="w-full rounded-lg border border-pink-300"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/TUN_8035.jpg"
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

                <SwiperSlide>
                    <Image
                        src="/d2043b8930b09beec2a1.jpg"
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
