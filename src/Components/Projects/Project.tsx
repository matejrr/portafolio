import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ProjectProps } from "@/data";
import { ProgressHeader } from "./ProgressHeader";
import { ProjectLayout } from "./layouts/ProjectLayout";
import { InvertedProjectLayout } from "./layouts/InvertedProjectLayout";

interface ProjectSectionProps extends ProjectProps {
    children?: React.ReactNode;
    data: ProjectProps;
    index: number;
}

export const Project: React.FC<ProjectSectionProps> = ({ data, index }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handler = () => setCurrentTime(video.currentTime);
        video.addEventListener("timeupdate", handler);
        return () => video.removeEventListener("timeupdate", handler);
    }, []);

    return (
        <SectionContainer>
            {data.sections && (
                <>
                    <ProgressHeader
                        index={index}
                        currentTime={currentTime}
                        sections={data.sections.sections}
                    />
                    {index % 2 === 0 ? (
                        <>
                            <ProjectLayout
                                data={data}
                                videoRef={videoRef}
                                index={index}
                            />
                        </>
                    ) : (
                        <>
                            <InvertedProjectLayout
                                data={data}
                                videoRef={videoRef}
                                index={index}
                            />
                        </>
                    )}
                </>
            )}
        </SectionContainer>
    );
};

const SectionContainer = styled.div`
    ${tw`relative w-full px-4 md:px-12 flex flex-col gap-24`}

    @media (max-width: 805px) {
        gap: 80px;
    }
    @media (max-width: 644px) {
        gap: 25px;
    }
`;
