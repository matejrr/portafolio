import { VideoRef } from "@/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const VideoNode: React.FC<{
    data: {
        videoRef: React.RefObject<HTMLVideoElement>;
        index: number;
        VideoComponent: VideoRef;
    };
}> = ({ data }) => {
    const smallScreen = useMediaQuery("(max-width: 860px)");
    const xsSmallScreen = useMediaQuery("(max-width: 805px)");
    const xxsSmallScreen = useMediaQuery("(max-width: 456px)");

    const width = xsSmallScreen
        ? "60%"
        : xxsSmallScreen
        ? "50%"
        : smallScreen
        ? "76%"
        : data.index === 1
        ? "120%"
        : data.index === 2
        ? "98%"
        : "76%";

    return <data.VideoComponent ref={data.videoRef} width={width} />;
};
