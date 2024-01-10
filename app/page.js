"use client";
import Header from "./components/Header";
import HeartRain from "./components/Heart";
import HomePage from "./components/HomePage";

export default function Home() {
    return (
        <main className="pt-8 px-2 ">
            <HeartRain />
            <HomePage />
        </main>
    );
}
