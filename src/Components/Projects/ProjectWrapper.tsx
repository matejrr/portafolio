import { DesignPatterns } from "@/Components/shared/DesignPatterns";
import tw, { styled } from "twin.macro";

import { ProjectProps } from "@/data";
import { animations } from "@/assets";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect } from "react";
import { Project } from "./Project";

interface ProjectWrapperProps {
    data: ProjectProps;
    projectIndex: number;
}

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
    data,
    projectIndex,
}) => {
    return (
        <Wrapper>
            <div className="absolute flex flex-row w-20 h-20 flex-1 z-10">
                <SideDesignWrapper animationName={data.animationName} />
            </div>
            <MainSecDesign />
            <div className="absolute flex flex-col gap-6 w-[100%] h-[350vh] self-center top-[1%] opacity-100">
                {data && (
                    <Project
                        animationName={data.animationName}
                        index={projectIndex}
                        sections={data.sections}
                        video={data.video}
                        layOut={data.layOut}
                        data={data}
                    />
                )}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${tw`relative w-full h-auto min-h-[60vh] flex flex-col backdrop-opacity-100 mb-28`}
    position: relative;
    z-index: 10;

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 60px;
        z-index: 10;
        pointer-events: none;
    }

    &::before {
        top: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
    }

    &::after {
        bottom: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }

    @media (max-width: 1472px) {
        height: 65vh;
    }
    @media (max-width: 1200px) {
        height: 70vh;
    }
    @media (max-width: 1118px) {
        height: 75vh;
    }
    @media (max-width: 990px) {
        height: 80vh;
    }
    @media (max-width: 940px) {
        height: 85vh;
    }
    @media (max-width: 905px) {
        height: 120vh;
    }
    @media (max-width: 890px) {
        height: 96vh;
    }
    @media (max-width: 888px) {
        height: 105vh;
    }
    @media (max-width: 885px) {
        height: 105vh;
    }
    @media (max-width: 860px) {
        height: 105vh;
    }
    @media (max-width: 805px) {
        height: 118vh;
    }
    @media (max-width: 767px) {
        height: 230vh;
    }
    @media (max-width: 644px) {
        height: 235vh;
    }
    @media (max-width: 596px) {
        height: 245vh;
    }
    @media (max-width: 489px) {
        height: 250vh;
    }
    @media (max-width: 476px) {
        height: 250vh;
    }
    @media (max-width: 440px) {
        height: 280vh;
    }
    @media (max-width: 436px) {
        height: 240vh;
    }
`;

const SideDesign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-width: 50px;
    border: 0.2px solid transparent;
    border-image-source: linear-gradient(
        to bottom,
        rgba(0, 102, 255, 0.6) 0%,
        rgba(100, 59, 206, 1) 100%
    );
    border-image-slice: 1;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const SideDesignWrapper: React.FC<{ animationName: string }> = ({
    animationName,
}) => {
    const projectAnimation = animations.find(
        (animation) => animation.name === animationName
    );

    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.play();
        }
    }, []);

    const handleAnimationComplete = () => {
        setTimeout(() => {
            lottieRef.current?.goToAndPlay(0, true);
        }, 4000);
    };

    return (
        <SideDesign>
            <Lottie
                lottieRef={lottieRef}
                animationData={projectAnimation?.animation}
                loop={false}
                autoplay={true}
                onComplete={handleAnimationComplete}
                style={{
                    width: 58,
                    height: 70,
                }}
            />
        </SideDesign>
    );
};

const MainSecDesign = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 67vh;
    filter: hue-rotate(30deg);
    transform-origin: top;
    border: 0.1px solid transparent;

    border-image-source: linear-gradient(
        to bottom,
        rgba(125, 135, 255, 1) 0%,
        rgba(133, 59, 206, 1) 100%
    );
    border-image-slice: 1;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: url(${DesignPatterns.skillsDesign2}) -12.5rem 0 / auto 67vh no-repeat;
        transform-origin: top;
        transform: scaleY(2.428);
        opacity: 0.85;
        z-index: -2;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: -1;
    }

    @media (max-width: 1472px) {
        &::before {
            background: none;
        }
    }
`;
