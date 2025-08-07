import { ProjectProps } from "@/data";
import React, { useState } from "react";
import DetailedInfo from "../DetailedInfo";
import { FlowComp } from "../FlowComp";
import tw, { styled } from "twin.macro";
import {
    DemoSection,
    FloatingMessage,
    FloatingTrigger,
    MobileAppExtraInfo,
    MobileAppFlowWrapper,
    MobileAppTextBlock,
    MobileGridLayout,
} from "./ProjectLayout";
import { Logos } from "@/Components/shared/Logos";

interface ProjectLayOut {
    data: ProjectProps;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    index: number;
}

export const InvertedProjectLayout: React.FC<ProjectLayOut> = ({
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
            {data.layOut === "webPage" ? (
                <div className="flex flex-col w-full">
                    {" "}
                    <WebPageGridLayout>
                        <DemoSection>
                            <WebPageFlowWrapper>
                                {data.video && (
                                    <FlowComp
                                        index={index}
                                        VideoComponent={data.video}
                                        videoRef={videoRef}
                                    />
                                )}
                            </WebPageFlowWrapper>{" "}
                        </DemoSection>
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
                    </WebPageGridLayout>
                    <WebPageExtraInfo>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row gap-3">
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
            ) : (
                <>
                    <MobileGridLayout>
                        <div className="w-full flex min-h-[750px] gap-5">
                            <MobileAppFlowWrapper>
                                {data.video && (
                                    <FlowComp
                                        index={index}
                                        VideoComponent={data.video}
                                        videoRef={videoRef}
                                    />
                                )}
                            </MobileAppFlowWrapper>{" "}
                            <div className="w-full flex justify-end mt-8">
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
                        </MobileAppTextBlock>
                    </MobileGridLayout>
                </>
            )}
        </>
    );
};

export const WebPageGridLayout = styled.div`
    ${tw`w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16`}

    @media (max-width: 1200px) {
        ${tw`grid-cols-1`}
    }
    @media (max-width: 805px) {
        ${tw`flex-col-reverse`}
    }
    @media (max-width: 767px) {
        ${tw`gap-6`}
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

const HeaderRow = tw.div`flex justify-between items-center`;

const Title = styled.h2`
    ${tw`text-2xl md:text-4xl font-bold uppercase tracking-wide text-white`}
    border-bottom: 2px solid #00ffff;
    padding-bottom: 0.5rem;
    display: inline-block;
`;

const Description = tw.p`text-gray-400 text-base leading-relaxed`;

const Explanation = tw.p`text-gray-300 text-sm leading-snug`;

export const WebPageFlowWrapper = styled.div`
    ${tw`flex aspect-video rounded-xl border max-h-[450px] border-section-contact-secondary bg-gray-900 shadow-lg overflow-hidden relative mx-auto z-20`}

    @media (min-width: 1472px) {
        ${tw`mx-auto min-h-[400px]`}
        box-sizing: border-box;
    }
    @media (max-width: 1471px) {
        ${tw`mx-auto min-h-[380px]`}
    }
    @media (max-width: 1375px) {
        ${tw`mx-auto min-h-[350px]`}
    }
    @media (max-width: 1265px) {
        ${tw`mx-auto min-h-[320px]`}
    }
    @media (max-width: 1200px) {
        ${tw`mx-auto w-auto min-h-[500px]`}
    }
    @media (max-width: 1060px) {
        ${tw`mx-auto w-full`}
    }
    @media (max-width: 950px) {
        ${tw`mx-auto min-h-[350px]`}
    }
    @media (max-width: 675px) {
        ${tw`mx-auto min-h-[300px]`}
    }
    @media (max-width: 625px) {
        ${tw`ml-0 mr-0 mt-10 mb-14 w-[90vw] min-h-[250px]`}
    }
    @media (max-width: 460px) {
        ${tw`min-h-[200px]`}
    }
`;
const StackRow = tw.div`flex gap-6 flex-wrap mt-6`;

const TechLogo = styled.div`
  ${tw`w-12 h-8 flex items-center justify-center`}
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);

`;

export const WebPageExtraInfo = styled.div`
    ${tw`w-[80%] flex flex-col gap-6 mt-10 z-50 ml-24`}

    @media (max-width: 1200px) {
        margin-left: 0px;
        width: 100%;
    }
`;

const Position = tw.h2`text-xl text-gray-50 tracking-widest font-bold`;

const Time = tw.h3`text-md text-gray-50 tracking-wider pt-1`;
