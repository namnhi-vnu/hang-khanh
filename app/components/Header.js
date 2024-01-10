"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dancing_Script } from "next/font/google";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaBookReader, FaFacebookMessenger } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
const inter = Dancing_Script({ subsets: ["latin"] });

const Header = () => {
    const router = usePathname();
    return (
        <header className={inter.className}>
            <div className="pt-4">
                <div className="flex items-center justify-center">
                    <div>
                        <div>
                            <h2 className="flex items-center justify-center gap-3 text-5xl max-md:text-3xl font-bold pb-4">
                                <span> Quang Khánh</span>
                                <span className="text-pink-600 text-4xl max-md:text-2xl heart-top-main ">
                                    <IoHeartSharp />
                                </span>
                                <span>Thuý Hằng</span>
                            </h2>
                        </div>
                        <div className="date flex items-center justify-center gap-2 text-xl font-semibold">
                            <span className="text-pink-600">
                                <IoHeartOutline />
                            </span>
                            <div> 05 - 02 - 2024</div>
                            <span className="text-pink-600">
                                <IoHeartOutline />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <audio autoPlay loop>
                <source src="/love.mp3" />
            </audio>
            <iframe
                src="/love.mp3"
                allow="autoplay"
                id="audio"
                className="hidden"
            ></iframe> */}

            <nav>
                <div className="navbar">
                    <div className="container mx-auto">
                        <div>
                            <div className="flex items-center justify-between max-md:justify-center max-md:gap-8 max-md:pt-4">
                                <ul className="flex items-center justify-between gap-8 text-3xl font-semibold">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`${
                                                router === "/"
                                                    ? "border-pink-500 rounded-md text-pink-400"
                                                    : "border-transparent hover:text-pink-300 hover:border-pink-300 duration-500 rounded-md"
                                            } border-b-4 `}
                                        >
                                            <span className="max-md:hidden">
                                                Cặp Đôi
                                            </span>
                                            <span className="hidden max-md:block">
                                                <GiLovers />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/love"
                                            className={`${
                                                router === "/love"
                                                    ? "border-pink-500 rounded-md text-pink-400"
                                                    : "border-transparent hover:text-pink-300 hover:border-pink-300 duration-500 rounded-md"
                                            } border-b-4 `}
                                        >
                                            <span className="max-md:hidden">
                                                Chuyện tình yêu
                                            </span>
                                            <span className="hidden max-md:block">
                                                <FaBookReader />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="flex items-center justify-between gap-8 text-3xl font-semibold">
                                    <li>
                                        <Link
                                            href="/event"
                                            className={`${
                                                router === "/event"
                                                    ? "border-pink-500 rounded-md text-pink-400"
                                                    : "border-transparent hover:text-pink-300 hover:border-pink-300 duration-500 rounded-md"
                                            } border-b-4 `}
                                        >
                                            <span className="max-md:hidden">
                                                Sự Kiện
                                            </span>
                                            <span className="hidden max-md:block">
                                                <FaChampagneGlasses />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className={`${
                                                router === "/wish"
                                                    ? "border-pink-500 rounded-md text-pink-400"
                                                    : "border-transparent hover:text-pink-300 hover:border-pink-300 duration-500 rounded-md"
                                            } border-b-4 `}
                                        >
                                            <span className="max-md:hidden">
                                                Lời Chúc
                                            </span>
                                            <span className="hidden max-md:block">
                                                <FaFacebookMessenger />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pay"
                                            className={`${
                                                router === "/pay"
                                                    ? "border-pink-500 rounded-md text-pink-400"
                                                    : "border-transparent hover:text-pink-300 hover:border-pink-300 duration-500 rounded-md"
                                            } border-b-4 `}
                                        >
                                            <span className="max-md:hidden">
                                                Mừng Cưới
                                            </span>
                                            <span className="hidden max-md:block">
                                                <FcMoneyTransfer />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
