"use client";
import { Dancing_Script, Patrick_Hand } from "next/font/google";
import Script from "next/script";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import HeartRain from "../components/Heart";
const inter = Dancing_Script({ subsets: ["latin"] });
const inter2 = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });
const page = () => {
    return (
        <div>
            <HeartRain />
            <Script
                src="https://kit.fontawesome.com/e078793ed8.js"
                crossOrigin="anonymous"
            ></Script>
            <div className="container mx-auto">
                <div className={inter.className}>
                    <div className="pt-8 text-center">
                        <h2 className="text-5xl max-md:text-3xl font-semibold pb-2">
                            Chuyện tình yêu
                        </h2>
                        <p className="text-3xl max-md:text-xl font-semibold p-2">
                            Yêu không có nghĩa là nhìn nhau, mà có nghĩa là cùng
                            nhau nhìn theo một hướng
                        </p>
                    </div>
                </div>
                <div className={inter2.className}>
                    <div className="pt-8 pb-8">
                        <div className="flex items-center justify-between gap-4 max-md:flex-col max-md:justify-center">
                            <div className="flex items-center justify-center text-center">
                                <div className="w-[550px] max-md:w-auto">
                                    <div className="flex items-center justify-center pb-2">
                                        <Image
                                            src="/08262bd271f8daa683e9.jpg"
                                            width={300}
                                            height={300}
                                            alt=""
                                            className="rounded-full border-2 border-pink-500"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-semibold pb-1">
                                            Thúy Hằng
                                        </h2>
                                        <p className="text-xl">
                                            Em là Nguyễn Thuý Hằng nhận anh Vũ
                                            Quang Khánh làm chồng của em và hứa
                                            giữ lòng chung thuỷ với anh, khi
                                            thịnh vượng cũng như lúc gian nan,
                                            khi mạnh khỏe cũng như lúc đau yếu,
                                            để yêu thương và tôn trọng anh mọi
                                            ngày suốt đời em.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="heart-loves max-md:pb-[6em] max-md:pt-[3em]">
                                <div className="contents">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="w-[550px] max-md:w-auto">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/84a23c1f6335c86b9124.jpg"
                                            width={300}
                                            height={300}
                                            alt=""
                                            className="rounded-full border-2 border-pink-500"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-semibold pb-1">
                                            Quang Khánh
                                        </h2>
                                        <p className="text-xl">
                                            Anh là Vũ Quang Khánh nhận em Nguyễn
                                            Thuý Hằng làm vợ của anh, và hứa giữ
                                            lòng chung thủy với em, khi thịnh
                                            vượng cũng như lúc gian nan, khi
                                            mạnh khỏe cũng như lúc đau yếu, để
                                            yêu thương và tôn trọng em mọi ngày
                                            suốt đời anh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
