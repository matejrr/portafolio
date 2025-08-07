import { ProjectProps } from "@/data";
import React, { useState } from "react";
import DetailedInfo from "../DetailedInfo";
import { FlowComp } from "../FlowComp";
import tw, { styled } from "twin.macro";
import {
    WebPageExtraInfo,
    WebPageFlowWrapper,
    WebPageGridLayout,
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
                                        projectIndex={index}
                                        detailedInfo={
                                            data.detailedExplanation ?? []
                                        }
                                    />
                                </MobileAppExtraInfo>
                                <div className="w-full h-fit flex justify-start items-center gap-6 pl-2 mt-5">
                                    <h2 className="tracking-widest text-cyan-400">
                                        Github Repo
                                    </h2>
                                    <FloatingTrigger
                                        $projectIndex={index}
                                        onClick={handleClick}
                                    >
                                        <Logos.github />
                                        {clicked && (
                                            <FloatingMessage visible={errorNav}>
                                                This repo is private
                                            </FloatingMessage>
                                        )}
                                    </FloatingTrigger>
                                </div>
                            </MobileAppTextBlock>
                        )}
                        <DemoSection>
                            <MobileAppFlowWrapper>
                                {data.video && (
                                    <FlowComp
                                        index={index}
                                        VideoComponent={data.video}
                                        videoRef={videoRef}
                                    />
                                )}
                            </MobileAppFlowWrapper>{" "}
                        </DemoSection>
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
                        <DemoSectionInvertedLayout>
                            <WebPageFlowWrapper>
                                {data.video && (
                                    <FlowComp
                                        index={index}
                                        VideoComponent={data.video}
                                        videoRef={videoRef}
                                    />
                                )}
                            </WebPageFlowWrapper>{" "}
                        </DemoSectionInvertedLayout>
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
                            projectIndex={index}
                            detailedInfo={data.detailedExplanation ?? []}
                        />
                    </WebPageExtraInfo>
                    <div className="w-full h-fit flex justify-start items-center gap-6 pl-2 mt-5">
                        <h2 className="tracking-widest text-cyan-400">
                            Github Repo
                        </h2>
                        <FloatingTrigger
                            $projectIndex={index}
                            onClick={handleClick}
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
            )}
        </>
    );
};

export const MobileGridLayout = styled.div`
    ${tw`w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16`}

    @media (max-width: 805px) {
        ${tw`flex flex-col-reverse gap-12`}
    }
    @media (max-width: 1000px) {
        margin: 0px 20px 0px 20px;
    }
    @media (max-width: 945px) {
        margin: 0px;
    }
    @media (max-width: 850px) {
        ${tw`flex flex-col-reverse gap-12`}
    }
`;

export const MobileAppTextBlock = styled.div`
    ${tw`flex flex-col gap-6 ml-24`}

    @media (max-width: 1472px) {
        gap 60px;
    }
    @media (max-width: 1000px) {
        gap 30px;
        margin-left: 0px;
    }
`;

export const WebPageTextBlock = styled.div`
   ${tw`flex flex-col gap-6 ml-24`}

    @media (max-width: 1472px) {
        gap 60px;
    }
    @media (max-width: 1200px) {
        gap 30px;
        margin-left: 0px;
        order: 0;
    }
`;

export const DemoSection = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1000px) {
        margin-right: 40px;
    }
    @media (max-width: 945px) {
        margin-right: -5px;
    }
    @media (max-width: 850px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 65px;
        margin-right: 0px;
    }
`;
export const DemoSectionInvertedLayout = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1200px) {
        order: -1;
    }
    @media (max-width: 1200px) {
        order: -1;
    }
    @media (max-width: 1000px) {
        margin-right: 40px;
    }
    @media (max-width: 945px) {
        margin-right: -5px;
    }
    @media (max-width: 850px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 65px;
        margin-right: 0px;
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
    ${tw`flex w-full aspect-video rounded-xl border px-2 py-2 max-h-[700px] border-section-contact-secondary bg-gray-900 shadow-lg relative mx-auto md:ml-16 z-20`}

    @media (min-width: 1472px) {
        ${tw`mx-auto min-h-[700px] max-w-[400px]`}
    }
    @media (max-width: 1471px) {
        ${tw`mx-auto min-h-[700px] max-w-[400px]`}
    }
    @media (max-width: 1273px) {
        ${tw`mx-auto min-h-[650px] max-w-[350px]`}
    }
    @media (max-width: 1080px) {
        ${tw`mx-auto max-h-[620px] max-w-[320px] min-w-[320px]`}
    }
    @media (max-width: 480px) {
        max-width: 70vw;
        max-height: 60vh;
    }
    @media (max-width: 380px) {
        min-width: 50vw;
        min-height: 60vh;
        margin: 0;
    }
    @media (max-width: 310px) {
        min-width: 47vw;
        min-height: 55vh;
        margin: 0;
    }
    @media (max-width: 275px) {
        min-width: 44vw;
        min-height: 52vh;
        margin: 0;
    }
    @media (max-width: 248px) {
        min-width: 40vw;
        min-height: 48vh;
        margin: 0;
    }
`;

const StackRow = tw.div`flex gap-6 flex-wrap mt-6`;

const TechLogo = styled.div`
  ${tw`w-12 h-8 flex items-center justify-center`}
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);

`;

export const MobileAppExtraInfo = styled.div<{ index?: number }>`
    ${tw`w-full flex flex-col justify-start gap-6 mt-14 px-2`}

    @media (max-width: 805px) {
        ${tw`mt-6`}
    }
`;

const Position = tw.h2`text-xl text-gray-50 tracking-widest font-bold`;

const Time = tw.h3`text-md text-gray-50 tracking-wider pt-1`;

export const FloatingTrigger = styled.div<{ $projectIndex: number }>`
    ${tw`w-11 h-11 flex mb-3`}
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
            transform: translateY(-1px);
        }
        50% {
            transform: translateY(6px);
        }
    }
`;

export const FloatingMessage = styled.div<{ visible: boolean }>`
    ${tw`mt-2 text-sm text-white bg-transparent border-2 border-purple-900 px-4 py-2 w-40 rounded-md shadow-lg`}
    position: absolute;
    left: 4rem;

    z-index: 10;

    opacity: ${({ visible }) => (visible ? 0.9 : 0)};
    transition: opacity 1.5s ease-in-out;

    @media (max-width: 435px) {
        position: absolute;
        left: 0;
        top: 4rem;
        right: 3rem;
    }
    @media (max-width: 360px) {
        position: absolute;
        top: 4rem;
        left: -3.5rem;
    }
    @media (max-width: 295px) {
        position: absolute;
        top: 4rem;
        left: -6rem;
    }
`;
