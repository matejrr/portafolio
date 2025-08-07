import React from "react";
import { VideoRef } from "@/data";
import tw, { styled } from "twin.macro";

interface FlowCompProps {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    VideoComponent: VideoRef;
    index: number;
}

export const FlowComp: React.FC<FlowCompProps> = ({
    videoRef,
    VideoComponent,
}) => {
    return (
        <VideoContainer>
            <VideoComponent
                ref={videoRef}
                className="w-full h-full object-contain"
            />
        </VideoContainer>
    );
};

const VideoContainer = styled.div`
    ${tw`relative w-full mx-auto bg-black rounded-xl overflow-hidden aspect-video shadow-lg flex items-center justify-center px-2 py-2`}

    @media (max-width: 625px) {
        padding: 0px;
        margin: 0px;
    }

    @media (max-width: 350px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`;
