// pages/index.js
import { useEffect } from "react";
import { IoHeartSharp } from "react-icons/io5";
const HeartRain = () => {
    useEffect(() => {
        function createHeart() {
            const heart = document.createElement("div");

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";

            // const iconContainer = document.createElement("span");
            heart.className = "text-pink-600 heart";

            heart.innerHTML = "♥";

            // heart.appendChild(iconContainer);

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        function createManyHearts() {
            for (let i = 0; i < 2; i++) {
                createHeart();
            }
        }

        const intervalId = setInterval(() => {
            createManyHearts();
        }, 300);

        // Clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return <div className="heart-rain-container"></div>;
};

export default HeartRain;
