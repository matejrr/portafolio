import { useEffect, useState } from "react";

export const useMediaQuery = (width: string): boolean => {
    const [matches, setMatches] = useState(
        () => window.matchMedia(width).matches
    );

    useEffect(() => {
        const media = window.matchMedia(width);
        const listener = () => setMatches(media.matches);

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [width]);
    return matches;
};
