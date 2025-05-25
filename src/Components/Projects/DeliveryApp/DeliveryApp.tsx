import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ProjectProps, projectsData, projectSections } from "@/data";
import { ProgressHeader } from "./ProgressHeader";
import DetailedCard from "@/Components/specific/ProjectsSection/DetailedCard";
import FlowComp from "./FlowComp";

interface ProjectSectionProps extends ProjectProps {
    children?: React.ReactNode;
}

export interface Chapter {
    name: string;
    start: number;
    end: number;
}

const DeliveryApp: React.FC<ProjectSectionProps> = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handler = () => setCurrentTime(video.currentTime);
        video.addEventListener("timeupdate", handler);
        return () => video.removeEventListener("timeupdate", handler);
    }, []);

    console.log("currentTime", currentTime);

    const deliveryAppData = projectsData.find(
        (project) => project.projectName === "Delivery App"
    );

    if (!deliveryAppData) return null;

    return (
        <SectionContainer>
            <ProgressHeader
                currentTime={currentTime}
                sections={projectSections.deliveryApp}
            />
            <>
                <GridLayout>
                    <TextBlock>
                        <HeaderRow>
                            <Title>{deliveryAppData.projectName}</Title>
                        </HeaderRow>
                        <Description>{deliveryAppData.description}</Description>
                        <Explanation>{deliveryAppData.explanation}</Explanation>

                        <StackRow>
                            {deliveryAppData.images?.techStack.map(
                                (image, i) => (
                                    <TechLogo key={i}>{image}</TechLogo>
                                )
                            )}
                        </StackRow>
                        <ExtraInfo>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-row gap-3">
                                    {deliveryAppData.roles.map(
                                        (role, index) => (
                                            <Position key={index}>
                                                {role}
                                            </Position>
                                        )
                                    )}
                                </div>
                                <Time>{deliveryAppData.date}</Time>
                            </div>

                            <h2 className="tracking-widest text-cyan-400">
                                {deliveryAppData.finished}
                            </h2>
                            <DetailedCard
                                detailedInfo={
                                    deliveryAppData.detailedExplanation
                                }
                            />
                        </ExtraInfo>
                    </TextBlock>
                    <FlowWrapper>
                        <FlowComp videoRef={videoRef} />
                    </FlowWrapper>{" "}
                </GridLayout>
            </>
        </SectionContainer>
    );
};

export default DeliveryApp;

const SectionContainer = styled.div`
    ${tw`relative w-full px-4 md:px-12 flex flex-col gap-24`}

    @media (max-width: 805px) {
        gap: 80px;
    }
    @media (max-width: 644px) {
        gap: 25px;
    }
`;

const GridLayout = styled.div`
    ${tw`relative grid grid-cols-1 md:grid-cols-2 items-start w-[95%] px-16 self-center`}

    @media (min-width: 1472px) {
        gap: 48px;
    }

    @media (max-width: 1472px) {
        display: flex;
        justify-content: around;
        gap: 0;
        width: 100%;
        padding: 0;
    }

    @media (max-width: 888px) {
        gap: 1rem;
    }
    @media (max-width: 860px) {
        gap: 2rem;
    }
    @media (max-width: 805px) {
        height: 88rem;
        flex-direction: column-reverse;
        gap: 4rem;
    }
    @media (max-width: 767px) {
        height: 87rem;
    }
    @media (max-width: 652px) {
        height: 92rem;
    }
    @media (max-width: 664px) {
        height: 88rem;
    }
    @media (max-width: 657px) {
        height: 89.5rem;
    }
    @media (max-width: 652px) {
        height: 89rem;
    }
    @media (max-width: 644px) {
        height: 90rem;
    }
    @media (max-width: 596px) {
        height: 96rem;
    }
    @media (max-width: 585px) {
        height: 92.5rem;
    }
    @media (max-width: 556px) {
        height: 92.5rem;
    }
    @media (max-width: 550px) {
        height: 95.5rem;
    }
    @media (max-width: 531px) {
        height: 96.5rem;
    }
    @media (max-width: 476px) {
        height: 98.5rem;
    }
    @media (max-width: 465px) {
        height: 100rem;
    }
    @media (max-width: 442px) {
        height: 100rem;
    }
    @media (max-width: 436px) {
        height: 102rem;
    }
    @media (max-width: 429px) {
        height: 102rem;
    }
    @media (max-width: 421px) {
        height: 103.5rem;
    }
    @media (max-width: 411px) {
        height: 105rem;
    }
    @media (max-width: 385px) {
        height: 106.5rem;
    }
    @media (max-width: 377px) {
        height: 107.5rem;
    }
    @media (max-width: 356px) {
        height: 109.5rem;
    }
    @media (max-width: 343px) {
        height: 111rem;
    }
    @media (max-width: 335px) {
        height: 112rem;
    }
    @media (max-width: 331px) {
        height: 113.5rem;
    }
    @media (max-width: 327px) {
        height: 115.5rem;
    }
`;

// const StatusBadge = tw.div`
//    left-3 items-center p-[6px] rounded-full border border-cyan-400
// `;
const TextBlock = styled.div`
    ${tw`flex flex-col gap-6 `}

    @media (max-width: 1472px) {
        gap 60px;
    }


`;

const HeaderRow = tw.div`flex justify-between items-center`;

const Title = styled.h2`
    ${tw`text-2xl md:text-4xl font-bold uppercase tracking-wide text-white`}
    border-bottom: 2px solid #00ffff;
    padding-bottom: 0.5rem;
    display: inline-block;
`;

const Description = tw.p`text-gray-400 text-base leading-relaxed`;

const Explanation = tw.p`text-gray-300 text-sm leading-snug`;

const FlowWrapper = styled.div`
    ${tw`w-[100%] max-w-[400px] min-w-[400px] h-[87%] aspect-video rounded-xl absolute z-50 ml-16 hover:[box-shadow: 0 0 45px 1px rgba(0, 255, 255, 0.05)]`}
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
    background: #111827;
    position: relative;

    @media (max-width: 860px) {
        min-width: 350px;
    }
    @media (max-width: 1472px) {
        height: 97%;
    }
    @media (max-width: 1347px) {
        height: 92%;
    }
    @media (max-width: 1255px) {
        height: 90%;
    }
    @media (max-width: 1232px) {
        height: 88%;
    }
    @media (max-width: 1224px) {
        height: 86%;
    }
    @media (max-width: 1220px) {
        height: 87%;
    }
    @media (max-width: 1213px) {
        height: 87%;
    }
    @media (max-width: 1164px) {
        height: 85%;
    }
    @media (max-width: 1153px) {
        height: 86%;
    }
    @media (max-width: 1125px) {
        height: 83%;
    }
    @media (max-width: 1120px) {
        height: 82%;
    }
    @media (max-width: 1118px) {
        height: 79%;
    }
    @media (max-width: 1035px) {
        height: 74%;
    }
    @media (max-width: 997px) {
        height: 71%;
    }
    @media (max-width: 989px) {
        height: 74%;
    }
    @media (max-width: 953px) {
        height: 72%;
    }
    @media (max-width: 946px) {
        height: 72%;
    }
    @media (max-width: 938px) {
        height: 71%;
    }
    @media (max-width: 913px) {
        height: 69%;
    }
    @media (max-width: 908px) {
        height: 67%;
    }
    @media (max-width: 894px) {
        height: 66%;
    }
    @media (max-width: 888px) {
        height: 66%;
    }
    @media (max-width: 886px) {
        height: 67%;
    }
    @media (max-width: 872px) {
        height: 65%;
    }
    @media (max-width: 860px) {
        height: 61%;
    }
    @media (max-width: 859px) {
        height: 59%;
    }
    @media (max-width: 822px) {
        height: 57%;
    }
    @media (max-width: 820px) {
        height: 56%;
    }
    @media (max-width: 815px) {
        height: 55%;
    }
    @media (max-width: 805px) {
        align-self: center;
        margin-left: 2%;
    }
    @media (max-width: 664px) {
        height: 70%;
    }
    @media (max-width: 652px) {
        height: 40%;
    }
    @media (max-width: 644px) {
        height: 39%;
    }
    @media (max-width: 585px) {
        height: 44%;
    }
    @media (max-width: 408px) {
        margin-right: 2%;
    }
`;

const StackRow = tw.div`flex gap-6 flex-wrap mt-6`;

const TechLogo = styled.div`
  ${tw`w-12 h-8 flex items-center justify-center`}
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10
`;

const ExtraInfo = styled.div`
    ${tw`w-full flex flex-col justify-start gap-6 ml-3 mt-24 z-50`}

    @media (max-width: 805px) {
        margin-top: 15px;
    }
`;

const Position = tw.h2`text-xl text-gray-50 tracking-widest font-bold`;

const Time = tw.h3`text-md text-gray-50 tracking-wider pt-1`;
