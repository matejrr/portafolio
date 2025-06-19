import { ProjectProps } from "@/data";
import React, { useState } from "react";
import DetailedInfo from "../DetailedInfo";
import { FlowComp } from "../FlowComp";
import tw, { styled } from "twin.macro";
import {
    WebPageExtraInfo,
    WebPageFlowWrapper,
    WebPageGridLayout,
    WebPageTextBlock,
} from "./InvertedProjectLayout";
import { Logos } from "@/Components/shared/Logos";

interface ProjectLayOut {
    data: ProjectProps;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    index: number;
}

export const ProjectLayout: React.FC<ProjectLayOut> = ({
    data,
    videoRef,
    index,
}) => {
    const [clicked, setClicked] = useState(false);
    const [errorNav, setErrorNav] = useState(false);

    const handleClick = () => {
        setClicked(true);
        if (!data.GitHubSrc) {
            setErrorNav(true);
        } else {
            window.open(data.GitHubSrc, "_blank");
        }

        setTimeout(() => {
            setErrorNav(false);
        }, 3000);
    };
    return (
        <>
            {data.layOut === "mobileApp" ? (
                <>
                    {" "}
                    <MobileGridLayout>
                        {data && (
                            <MobileAppTextBlock>
                                <HeaderRow>
                                    <Title>{data.projectName}</Title>
                                </HeaderRow>
                                <Description>{data.description}</Description>
                                <Explanation>{data.explanation}</Explanation>

                                <StackRow>
                                    {data.images?.techStack.map((image, i) => (
                                        <TechLogo key={i}>{image}</TechLogo>
                                    ))}
                                </StackRow>
                                <MobileAppExtraInfo>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-row gap-3">
                                            {data?.roles?.map((role, index) => (
                                                <Position key={index}>
                                                    {role}
                                                </Position>
                                            ))}
                                        </div>
                                        <Time>{data.date}</Time>
                                    </div>

                                    <h2 className="tracking-widest text-cyan-400">
                                        {data.finished}
                                    </h2>
                                    <DetailedInfo
                                        detailedInfo={
                                            data.detailedExplanation ?? []
                                        }
                                    />
                                </MobileAppExtraInfo>
                            </MobileAppTextBlock>
                        )}
                        <div className="w-full min-h-[750px] gap-5">
                            <MobileAppFlowWrapper>
                                {data.video && (
                                    <FlowComp
                                        index={index}
                                        VideoComponent={data.video}
                                        videoRef={videoRef}
                                    />
                                )}
                            </MobileAppFlowWrapper>{" "}
                            <div className="w-full h-fit flex justify-end pr-32 pt-7">
                                <FloatingTrigger
                                    $projectIndex={index}
                                    onClick={handleClick}
                                    title="Github Repo"
                                >
                                    <Logos.github />
                                    {clicked && (
                                        <FloatingMessage visible={errorNav}>
                                            This repo is private
                                        </FloatingMessage>
                                    )}
                                </FloatingTrigger>
                            </div>
                        </div>
                    </MobileGridLayout>
                </>
            ) : (
                <div className="flex flex-col">
                    <WebPageGridLayout>
                        {" "}
                        <WebPageTextBlock>
                            <HeaderRow>
                                <Title>{data.projectName}</Title>
                            </HeaderRow>
                            <Description>{data.description}</Description>
                            <Explanation>{data.explanation}</Explanation>
                            <StackRow>
                                {data.images?.techStack.map((image, i) => (
                                    <TechLogo key={i}>{image}</TechLogo>
                                ))}
                            </StackRow>
                        </WebPageTextBlock>
                        <div className="w-full md:min-h-[500px]">
                            <WebPageFlowWrapper>
                                {data.video && (
                                    <FlowComp
                                        index={index}
                                        VideoComponent={data.video}
                                        videoRef={videoRef}
                                    />
                                )}
                            </WebPageFlowWrapper>{" "}
                            <div className="w-full h-fit flex justify-end mt-8">
                                <FloatingTrigger
                                    $projectIndex={index}
                                    onClick={handleClick}
                                    title="Github Repo"
                                >
                                    <Logos.github />
                                    {clicked && (
                                        <FloatingMessage visible={errorNav}>
                                            This repo is private
                                        </FloatingMessage>
                                    )}
                                </FloatingTrigger>
                            </div>
                        </div>
                    </WebPageGridLayout>
                    <WebPageExtraInfo>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row gap-3 justify-start">
                                {data?.roles?.map((role, index) => (
                                    <Position key={index}>{role}</Position>
                                ))}
                            </div>
                            <Time>{data.date}</Time>
                        </div>

                        <h2 className="tracking-widest text-cyan-400">
                            {data.finished}
                        </h2>
                        <DetailedInfo
                            detailedInfo={data.detailedExplanation ?? []}
                        />
                    </WebPageExtraInfo>
                </div>
            )}
        </>
    );
};

export const MobileGridLayout = styled.div`
    ${tw`w-full max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16`}

    @media (max-width: 805px) {
        ${tw`flex flex-col-reverse gap-12`}
    }
`;

export const MobileAppTextBlock = styled.div`
    ${tw`flex flex-col gap-6 ml-16`}

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

export const MobileAppFlowWrapper = styled.div`
    ${tw`w-full max-w-[400px] aspect-video rounded-xl border min-h-[750px] border-white/10 bg-gray-900 shadow-lg relative mx-auto md:ml-16 z-20`}

    @media (max-width: 805px) {
        ${tw`mx-auto min-h-[300px]`}
    }

    @media (max-width: 445px) {
        ${tw`min-h-[250px]`}
    }
`;

const StackRow = tw.div`flex gap-6 flex-wrap mt-6`;

const TechLogo = styled.div`
  ${tw`w-12 h-8 flex items-center justify-center`}
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);

`;

export const MobileAppExtraInfo = styled.div`
    ${tw`w-full flex flex-col justify-start gap-6 mt-28 px-2`}

    @media (max-width: 805px) {
        ${tw`mt-6`}
    }
`;

const Position = tw.h2`text-xl text-gray-50 tracking-widest font-bold`;

const Time = tw.h3`text-md text-gray-50 tracking-wider pt-1`;

export const FloatingTrigger = styled.div<{ $projectIndex: number }>`
    ${tw`w-12 h-12 flex`}
    background: conic-gradient(
        from 180deg at 50% 50%,
        #00ffff 0%,
        #8a2be2 100%
    );
    cursor: ${({ $projectIndex }) =>
        $projectIndex === 0
            ? "not-allowed"
            : $projectIndex === 1
            ? "not-allowed"
            : "pointer"};
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    animation: float 3s ease-in-out infinite;
    will-change: transform;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-8px);
        }
    }

    @media (max-width: 1472px) {
        bottom: -35rem;
        right: 5rem;
    }
    @media (max-width: 1472px) {
        bottom: -35rem;
        right: 5rem;
    }
    @media (max-width: 1345px) {
        bottom: -33rem;
        right: 5rem;
    }
    @media (max-width: 1255px) {
        bottom: -34rem;
        right: 5rem;
    }
    @media (max-width: 1218px) {
        bottom: -36rem;
        right: 5rem;
    }
    @media (max-width: 1200px) {
        bottom: -34rem;
        right: 5rem;
    }
    @media (max-width: 1164px) {
        bottom: -35rem;
        right: 5rem;
    }
    @media (max-width: 1125px) {
        bottom: -32rem;
        right: 5rem;
    }
    @media (max-width: 1118px) {
        bottom: -30rem;
        right: 5rem;
    }
    @media (max-width: 1099px) {
        bottom: -31rem;
        right: 5rem;
    }
    @media (max-width: 1043px) {
        bottom: -32rem;
        right: 5rem;
    }
    @media (max-width: 1035px) {
        bottom: -31rem;
        right: 5rem;
    }
    @media (max-width: 947px) {
        bottom: -32rem;
        right: 5rem;
    }
    @media (max-width: 945px) {
        bottom: -33rem;
        right: 5rem;
    }
    @media (max-width: 940px) {
        bottom: -34rem;
        right: 5rem;
    }
    @media (max-width: 908px) {
        bottom: -31rem;
        right: 5rem;
    }
    @media (max-width: 905px) {
        bottom: -29rem;
        right: 5rem;
    }
    @media (max-width: 902px) {
        bottom: -30rem;
        right: 5rem;
    }
    @media (max-width: 890px) {
        bottom: -28rem;
        right: 5rem;
    }
    @media (max-width: 888px) {
        bottom: -18rem;
        right: 5rem;
    }
    @media (max-width: 860px) {
        bottom: -16rem;
        right: 5rem;
    }
    @media (max-width: 805px) {
        top: 56rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }
    @media (max-width: 689px) {
        top: 54.5rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }
    @media (max-width: 664px) {
        top: 55rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }
    @media (max-width: 652px) {
        top: 54.5rem;
        right: 2rem;
    }
    @media (max-width: 596px) {
        top: 56.5rem;
        right: 2rem;
    }
    @media (max-width: 586px) {
        top: 54.5rem;
        right: 2rem;
    }
    @media (max-width: 585px) {
        top: 51.5rem;
        right: 2rem;
    }
    @media (max-width: 550px) {
        top: 51rem;
        right: 2rem;
    }
    @media (max-width: 440px) {
        top: 63rem;
        right: 2rem;
    }
    @media (max-width: 436px) {
        top: 63.5rem;
        right: 2rem;
    }
    @media (max-width: 421px) {
        top: 63rem;
        right: 2rem;
    }
    @media (max-width: 411px) {
        top: 63rem;
        right: 2rem;
    }
`;
export const FloatingMessage = styled.div<{ visible: boolean }>`
    ${tw`mt-2 text-sm text-white bg-transparent border-2 border-purple-900 px-4 py-2 w-40 rounded-md shadow-lg`}
    position: absolute;
    right: -3rem;
    bottom: -4.3rem;
    z-index: 10;

    opacity: ${({ visible }) => (visible ? 0.9 : 0)};
    transition: opacity 1.5s ease-in-out;

    @media (max-width: 805px) {
        right: 0;
        bottom: -3rem;
    }
    @media (max-width: 643px) {
        right: 0;
        bottom: -4.3rem;
    }
    @media (max-width: 596px) {
        right: 0;
        bottom: -3rem;
    }
    @media (max-width: 583px) {
        right: 0;
        bottom: -4.3rem;
    }
    @media (max-width: 550px) {
        display: none;
    }
`;
