import { useEffect, useRef, useState } from "react";

export function useSmoothProgress(maxTime: number = 82) {
    const [currentTime, setCurrentTime] = useState(0);
    const currentTimeRef = useRef(0);
    const lastFrameTime = useRef(performance.now());

    useEffect(() => {
        let animationFrameId: number;

        const animate = (time: number) => {
            const delta = (time - lastFrameTime.current) / 1000; // seconds
            lastFrameTime.current = time;

            // Increase time smoothly, capped at maxTime
            currentTimeRef.current = Math.min(
                currentTimeRef.current + delta,
                maxTime
            );

            // Update state every few frames to avoid jitter
            setCurrentTime(currentTimeRef.current);

            if (currentTimeRef.current < maxTime) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [maxTime]);

    return currentTime;
}
