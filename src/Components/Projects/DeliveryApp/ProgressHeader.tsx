import React, { useMemo } from "react";
import { InView } from "react-intersection-observer";
import SectionProgress from "./SectionProgress";
import tw, { styled } from "twin.macro";

export interface Chapter {
    start: number;
    end: number;
}
// eslint-disable-next-line react-refresh/only-export-components
export const intervals: Chapter[] = [
    { start: 0, end: 6.5 },
    { start: 6.5, end: 16 },
    { start: 16, end: 25.5 },
    { start: 25.5, end: 38 },
    { start: 38, end: 47 },
    { start: 47, end: 82 },
];

interface ProgressHeaderProps {
    sections: { name: string; sections: string[] };
    currentTime: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
    sections,
    currentTime,
}) => {
    const data = useMemo(() => {
        return sections.sections.map((label, idx) => {
            const interval = intervals[idx] || { start: 0, end: 1 };
            const duration = interval.end - interval.start;
            let progress = 0;
            let active = false;

            if (currentTime >= interval.end) {
                progress = 1;
            } else if (currentTime >= interval.start) {
                active = true;
                progress = (currentTime - interval.start) / duration;
            }

            return {
                label,
                idx,
                progress: Math.max(0, Math.min(1, progress)),
                active,
            };
        });
    }, [sections.sections, currentTime]);

    return (
        <Container>
            <InView
                rootMargin="20% 0px -20% 0px"
                threshold={1}
                triggerOnce={false}
            >
                {({ ref, inView }) => (
                    <div className="w-full h-full">
                        <Wrapper ref={ref}>
                            {data.map(({ label, idx, progress, active }) => (
                                <SectionProgress
                                    key={idx}
                                    label={label}
                                    progress={progress}
                                    active={active}
                                    inView={inView}
                                />
                            ))}
                        </Wrapper>
                    </div>
                )}
            </InView>
        </Container>
    );
};

const Container = styled.div`
    ${tw`w-[95%] px-2 py-7 self-end`}

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    ${tw`flex gap-1 overflow-hidden`}

    @media (max-width: 940px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
        align-items: center;
        align-content: center;
        row-gap: 1rem;
        column-gap: 1rem;
    }
    @media (max-width: 440px) {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        align-content: center;
        row-gap: 1rem;
        column-gap: 1rem;
    }
`;
