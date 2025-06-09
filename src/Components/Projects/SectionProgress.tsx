import { ProgressBar } from "@/Components/specific/ProjectsSection/ProgressBar";
import React from "react";
import tw, { styled } from "twin.macro";

interface SectionProgressProps {
    label: string;
    progress: number;
    active: boolean;
    inView: boolean;
}

export const SectionProgress = React.memo<SectionProgressProps>(
    ({ label, progress, active, inView }) => (
        <SectionContainer>
            <SectionLabel active={active} $inView={inView}>
                {label}
            </SectionLabel>

            <ProgressBar
                value={progress * 100}
                active={active}
                inViewPort={inView}
            />
        </SectionContainer>
    ),

    (prev, next) =>
        prev.progress === next.progress &&
        prev.active === next.active &&
        prev.inView === next.inView &&
        prev.label === next.label
);

const SectionContainer = tw.div`flex flex-col gap-2 justify-center w-full min-w-[100px]`;
const SectionLabel = styled.div<{ active: boolean; $inView: boolean }>`
    ${tw`self-center font-semibold`}
    color: ${({ $inView, active }) =>
        $inView && active ? "rgba(150,59,206,1)" : "rgba(200,200,200,1)"};

    transform: ${({ active }) => (active ? "scale(1.02)" : "none")};

    @media (max-width: 1080px) {
        font-size: 14px;
    }
`;
