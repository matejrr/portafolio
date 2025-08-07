import styled from "styled-components";
import tw from "twin.macro";

export interface WorkProps {
    firmName: string;
    position: string;
    timeSpan: string;
    responsabilities: string;
    explanation: string;
    technologies: string[];
    index: number;
}

const Card: React.FC<WorkProps> = ({
    explanation,
    firmName,
    position,
    responsabilities,
    technologies,
    timeSpan,
    index,
}) => {
    return (
        <div className="flex justify-center items-center w-full h-auto mt-10 mb-6 ml-1 mr-[10px]">
            <CardContainer>
                <div className="w-full">
                    <Header>
                        <FirmName>{firmName}</FirmName>
                        <VerticalLine>|</VerticalLine>
                        <TimeSpan $index={index}>{timeSpan}</TimeSpan>
                    </Header>
                    <Position $index={index}>{position}</Position>
                </div>
                <Content>
                    <Section>
                        <SectionHeader>{responsabilities}</SectionHeader>
                        <SectionText>{explanation}</SectionText>
                    </Section>

                    <Section>
                        <SectionHeader>Used Technologies</SectionHeader>
                        <SectionText>{technologies}</SectionText>
                    </Section>
                </Content>
            </CardContainer>
        </div>
    );
};

export default Card;

const CardContainer = styled.div`
    ${tw`flex flex-col gap-4 w-[78%] rounded-lg border border-white/10 transition-all duration-200 ease-in-out`}

    padding: clamp(1rem, 4vw, 2rem);
    background-color: rgba(255, 255, 255, 0.05);

    &:hover {
        background-color: var(--color-section-works-card1);
        transform: scale(1.02);
        cursor: default;

        @media (hover: none) {
            transform: none;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-left: clamp(0.5rem, 3vw, 2.5rem);
`;

const Header = styled.div`
    ${tw`flex flex-row gap-2`}

    @media (max-width: 1430px) {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`;

const VerticalLine = styled.span`
    ${tw`text-white text-xl`}

    @media (max-width: 1430px) {
        display: none;
    }
`;

const FirmName = styled.h2`
    ${tw`text-white font-semibold`}
    font-size: clamp(1rem, 2vw + 0.2rem, 1.3rem);
    text-align: left;
`;

const TimeSpan = styled.h2.withConfig({
    shouldForwardProp: (prop) => prop !== "index",
})<{ $index: number }>(({ $index }) => ({
    fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)",
    fontWeight: "bold",
    textAlign: "right",
    display: "inline-block",

    ...($index === 0
        ? {
              background: "linear-gradient(90deg, #00ffab, #00c18c, #00ffab)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
          }
        : { color: "white" }),

    "@media (max-width: 768px)": {
        textAlign: "left",
    },
}));

const TextGradients = [
    {
        color: tw` text-section-works-texthighlight1`,
    },
    {
        color: tw`text-section-works-texthighlight2`,
    },
    {
        color: tw`text-section-works-texthighlight3`,
    },
];

const Position = styled.p<{ $index: number }>`
    ${tw`font-medium`}
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    color: ${({ $index }) => TextGradients[$index].color};
`;

const Section = tw.div`
    flex flex-col gap-2 w-[95%]
`;

const SectionHeader = styled.h3`
    ${tw`uppercase text-white/80`}
    font-size: clamp(0.85rem, 1.6vw, 1rem);
    letter-spacing: clamp(0.04rem, 0.2vw, 0.12rem);
`;

const SectionText = styled.p`
    ${tw`text-white/60 leading-relaxed`}
    font-size: clamp(0.85rem, 1.4vw, 1rem);
    line-height: 1.6rem;
    letter-spacing: 0.02rem;
`;
