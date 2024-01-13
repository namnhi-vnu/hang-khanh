"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import HeartRain from "./components/Heart";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [isPopup, setIsPopup] = useState(false);
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {});

    return (
        <html lang="en">
            <head>
                <title>Hằng ♥ Khánh</title>
            </head>
            <body className={`${inter.className} `}>
                <div className={`app ${isActive ? "active" : ""}`}>
                    <div>
                        <Header />
                        {isPopup && <Popup />}
                    </div>
                    <main>{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </body>
        </html>
    );
}
