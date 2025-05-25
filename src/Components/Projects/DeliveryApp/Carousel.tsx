// ProgressHeaderCarousel.tsx
import React, { useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/Carousel";
import SectionProgress from "./SectionProgress";

interface DataProps {
    label: string;
    idx: number;
    progress: number;
    active: boolean;
}

interface ProgressHeaderCarouselProps {
    data: DataProps[];
    inView: boolean;
}

export const ProgressHeaderCarousel = React.forwardRef<
    HTMLDivElement,
    ProgressHeaderCarouselProps
>(({ data, inView }, forwardedRef) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const plugin = useRef(Autoplay({ delay: 500, stopOnInteraction: true }));

    // whenever `inView` or `data` changes, re-compute overflow
    // and start/stop the autoplay accordingly
    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const overflow = track.scrollWidth - container.clientWidth;
        if (inView && overflow > 0) {
            plugin.current.play();
        } else {
            plugin.current.stop();
        }
    }, [inView, data]);

    return (
        <Carousel
            // attach both embla’s ref and our containerRef
            ref={(node) => {
                containerRef.current = node as HTMLDivElement | null;
                if (typeof forwardedRef === "function") forwardedRef(node);
                else if (forwardedRef)
                    forwardedRef.current = node as HTMLDivElement;
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
        >
            <CarouselContent ref={trackRef}>
                {data.map(({ label, idx, progress, active }) => (
                    <CarouselItem key={idx}>
                        <SectionProgress
                            label={label}
                            progress={progress}
                            active={active}
                            inView={inView}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
});

ProgressHeaderCarousel.displayName = "ProgressHeaderCarousel";
