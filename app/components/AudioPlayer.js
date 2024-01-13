// components/AudioPlayer.js
import React, { useState } from "react";
import { IoMusicalNote } from "react-icons/io5";
const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlay = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    return (
        <div>
            <button
                onClick={handleTogglePlay}
                className="fixed left-0 bottom-4 bg-pink-500 p-2 rounded-xl text-white z-50"
            >
                {`${isPlaying ? "⏸" : "Music 🔊"}`}
            </button>
            {isPlaying && (
                <audio autoPlay loop type="audio/mp3">
                    <source src="/love.mp3" type="audio/mp3" />
                </audio>
            )}
        </div>
    );
};

export default AudioPlayer;
