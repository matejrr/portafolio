import React, { useMemo } from "react";
import { InView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";
import { SectionProgress } from "./SectionProgress";

export interface Chapter {
    start: number;
    end: number;
}
// eslint-disable-next-line react-refresh/only-export-components
export const intervals: Chapter[][] = [
    [
        { start: 0, end: 6.5 },
        { start: 6.5, end: 16 },
        { start: 16, end: 25.5 },
        { start: 25.5, end: 38 },
        { start: 38, end: 47 },
        { start: 47, end: 82 },
    ],
    [
        { start: 0, end: 46 },
        { start: 46, end: 73 },
        { start: 73, end: 112 },
        { start: 112, end: 241 },
    ],
    [
        { start: 0, end: 1 },
        { start: 1, end: 6 },
        { start: 6, end: 18 },
        { start: 18, end: 39 },
        { start: 39, end: 43 },
        { start: 43, end: 103 },
    ],
];

interface ProgressHeaderProps {
    sections: string[];
    currentTime: number;
    index: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
    sections,
    currentTime,
    index,
}) => {
    const data = useMemo(() => {
        return sections.map((label, idx) => {
            const interval = intervals[index][idx] || { start: 0, end: 1 };
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
    }, [sections, currentTime, index]);

    return (
        <Container>
            <InView
                rootMargin="20% 0px -20% 0px"
                threshold={1}
                triggerOnce={false}
            >
                {({ ref, inView }) => (
                    <div className="w-full h-full">
                        <Wrapper $sections={sections} $index={index} ref={ref}>
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

const Wrapper = styled.div<{ $index: number; $sections: string[] }>`
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
