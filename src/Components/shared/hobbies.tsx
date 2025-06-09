import { images } from "@/assets";

export const hobbies = {
    programming: () => (
        <img
            src={images.programming}
            alt="guitar"
            className="w-full h-full object-contain"
        />
    ),
    guitar: () => (
        <img
            src={images.guitar}
            alt="guitar"
            className="w-full h-full object-contain"
        />
    ),
    gym: () => (
        <img
            src={images.gym}
            alt="weights"
            className="w-full h-full object-contain"
        />
    ),
    writing: () => (
        <img
            src={images.writing}
            alt="notebook"
            className="w-full h-full object-contain"
        />
    ),
    videoGames: () => (
        <img
            src={images.videoGames}
            alt="video-game controller"
            className="w-full h-full object-contain"
        />
    ),
};
