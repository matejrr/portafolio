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
            <SideDesignWrapperContainer>
                <SideDesignWrapper animationName={data.animationName} />
            </SideDesignWrapperContainer>

            <ProjectContent>
                <Project
                    animationName={data.animationName}
                    index={projectIndex}
                    sections={data.sections}
                    video={data.video}
                    layOut={data.layOut}
                    data={data}
                />
            </ProjectContent>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${tw`relative w-full flex flex-col backdrop-opacity-100 mb-28`}
    min-height: auto;
    z-index: 10;
`;

const SideDesignWrapperContainer = styled.div`
    ${tw`absolute top-0 left-0 w-20 h-20 z-10 flex`}

    @media (max-width: 1000px) {
        display: none;
    }
`;

const ProjectContent = styled.div`
    ${tw`w-full flex flex-col gap-6 self-center opacity-100`}

    padding-top: 1rem;

    @media (max-width: 768px) {
        padding-top: 2rem;
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
`;

const SideDesignWrapper: React.FC<{ animationName: string }> = ({
    animationName,
}) => {
    const projectAnimation = animations.find(
        (animation) => animation.name === animationName
    );

    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    useEffect(() => {
        lottieRef.current?.play();
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
                autoplay
                onComplete={handleAnimationComplete}
                style={{
                    width: 58,
                    height: 70,
                }}
            />
        </SideDesign>
    );
};
