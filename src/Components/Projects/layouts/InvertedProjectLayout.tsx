import { ProjectProps } from "@/data";
import React, { useState } from "react";
import DetailedInfo from "../DetailedInfo";
import { FlowComp } from "../FlowComp";
import tw, { styled } from "twin.macro";
import {
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
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };
    return (
        <>
            {data.layOut === "webPage" ? (
                <div className="flex flex-col w-full">
                    {" "}
                    <WebPageGridLayout>
                        <div className="w-full md:min-h-[500px] gap-5">
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
                                        <FloatingMessage visible={visible}>
                                            This repo is private
                                        </FloatingMessage>
                                    )}
                                </FloatingTrigger>
                            </div>
                        </div>
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
                            detailedInfo={data.detailedExplanation ?? []}
                        />
                    </WebPageExtraInfo>
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
                                        <FloatingMessage visible={visible}>
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
    ${tw`flex flex-wrap md:flex-nowrap w-full px-6 md:px-20 items-start`}

    @media (max-width: 805px) {
        ${tw`flex-col-reverse`}
    }
`;

export const WebPageTextBlock = styled.div`
    ${tw`basis-1/3 shrink-0 flex flex-col gap-6 md:ml-12`}

    @media (max-width: 805px) {
        ${tw`ml-0 basis-full`}
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
    ${tw`w-full min-w-[300px] md:min-w-[800px] md:min-h-[500px] max-w-[800px] aspect-video rounded-xl bg-gray-900 border border-white/10 shadow-lg relative z-50 mx-auto`}

    @media (max-width: 860px) {
        ${tw`max-w-full aspect-[16/9]`}
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

    @media (max-width: 805px) {
        margin-top: 15px;
    }
    @media (max-width: 445px) {
        margin-top: 15px;
        padding-right: 10px;
    }
`;

const Position = tw.h2`text-xl text-gray-50 tracking-widest font-bold`;

const Time = tw.h3`text-md text-gray-50 tracking-wider pt-1`;
