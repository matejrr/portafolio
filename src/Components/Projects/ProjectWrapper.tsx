import { DesignPatterns } from "@/Components/shared/DesignPatterns";
import { Logos } from "@/Components/shared/Logos";
import tw, { styled } from "twin.macro";
import { useState } from "react";
import { ProjectProps } from "@/data";
import { Project } from "./Project";
import { animations } from "@/assets";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect } from "react";

interface ProjectWrapperProps {
    data: ProjectProps;
    index: number;
}

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
    data,
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
        <Wrapper>
            <div className="absolute flex flex-row w-20 h-20 flex-1 z-10">
                <SideDesignWrapper animationName={data.animationName} />
            </div>
            <MainSecDesign />
            <div className="absolute flex flex-col gap-6 w-[100%] h-[350vh] self-center top-[1%] opacity-100">
                {data && (
                    <Project
                        animationName={data.animationName}
                        index={index}
                        sections={data.sections}
                        video={data.video}
                        layOut={data.layOut}
                        data={data}
                    />
                )}
            </div>
            <FloatingTrigger onClick={handleClick} title="Github Repo">
                <Logos.github />
                {clicked && (
                    <FloatingMessage visible={visible}>
                        This repo is private
                    </FloatingMessage>
                )}
            </FloatingTrigger>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${tw`relative w-full h-auto min-h-[60vh] flex flex-col backdrop-opacity-100`}
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
        height: 90vh;
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
        transform: scaleY(2.23);
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

const FloatingTrigger = styled.div`
    ${tw`w-12 h-12 cursor-not-allowed`}
    position: absolute;
    right: 7rem;
    bottom: -27rem;
    background: conic-gradient(
        from 180deg at 50% 50%,
        #00ffff 0%,
        #8a2be2 100%
    );
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
const FloatingMessage = styled.div<{ visible: boolean }>`
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
