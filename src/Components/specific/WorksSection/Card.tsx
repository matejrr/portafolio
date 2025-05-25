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
        <div className="flex justify-center items-center w-full h-auto mt-10 mb-6">
            <CardContainer>
                <div className="w-full">
                    <Header>
                        <FirmName>{firmName}</FirmName>
                        <VerticalLine>|</VerticalLine>
                        <TimeSpan index={index}>{timeSpan}</TimeSpan>
                    </Header>
                    <Position index={index}>{position}</Position>
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

const CardContainer = tw.div`
    flex flex-col gap-4 opacity-100 w-[75%] p-6 rounded-lg bg-white/5 border border-white/10
    transition-all duration-200 ease-in-out hover:scale-102
    hover:bg-section-works-card1  hover:cursor-not-allowed
`;

const Content = tw.div`
  flex flex-col gap-3.5 pl-10
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
    ${tw`text-xl font-semibold text-white min-w-fit`}

    @media (max-width: 460px) {
        text-align: left;
        font-size: 16px;
    }
    @media (max-width: 365px) {
        font-size: 16px;
    }
`;

const TimeSpan = styled.h2.withConfig({
    shouldForwardProp: (prop) => prop !== "index",
})<{ index: number }>(({ index }) => ({
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "right",
    display: "inline-block",

    ...(index === 0
        ? {
              background: "linear-gradient(90deg, #00ffab, #00c18c, #00ffab)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
          }
        : { color: "white" }),

    "@media (max-width: 1430px)": {
        textAlign: "left",
        fontSize: "16px",
    },
    "@media (max-width: 460px)": {
        fontSize: "14px",
    },
    "@media (max-width: 365px)": {
        fontSize: "14px",
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

const Position = styled.p<{ index: number }>`
    ${tw`text-base font-medium`}
    color: ${({ index }) => TextGradients[index].color}

    @media (max-width: 460px) {
        text-align: left;
        font-size: 14px;
    }
    @media (max-width: 365px) {
        font-size: 14px;
    }
`;

const Section = tw.div`
    flex flex-col gap-2 w-[95%]
`;

const SectionHeader = styled.h3`
    ${tw`text-white/80 uppercase tracking-wider [letter-spacing: 0.12rem]`}

    @media (max-width: 490px) {
        letter-spacing: 0.1rem;
        font-size: 14px;
    }
    @media (max-width: 330px) {
        letter-spacing: 0.05rem;
        font-size: 14px;
    }
    @media (max-width: 290px) {
        letter-spacing: 0.05rem;
        font-size: 14px;
    }
`;

const SectionText = styled.p`
    ${tw`text-white/60 leading-relaxed tracking-wider`}

    @media (max-width: 490px) {
        font-size: 14px;
    }
`;
