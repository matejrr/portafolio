import { aboutMe, Hobbies, HobbiesProps, Languages, TimeLine } from "@/data";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import tw from "twin.macro";

export const AboutMe: React.FC = () => {
    return (
        <Container id="about-me-section">
            <InView threshold={0.1} triggerOnce={true}>
                {({ ref, inView }) => (
                    <ResponsiveDiv>
                        {aboutMe.map((section, index) => (
                            <Section key={index} ref={ref}>
                                <Header
                                    style={{ marginBottom: "0.5rem" }}
                                    $index={index}
                                    $inView={inView}
                                >
                                    {section.header}
                                </Header>
                                <Content $index={index} $inView={inView}>
                                    {section.content}
                                </Content>
                            </Section>
                        ))}
                    </ResponsiveDiv>
                )}
            </InView>

            <InView threshold={0.1} triggerOnce={true}>
                {({ ref, inView }) => (
                    <TwoColumnLayout>
                        <Column ref={ref}>
                            <Header
                                style={{ marginBottom: "1rem" }}
                                $index={0}
                                $inView={inView}
                            >
                                Timeline
                            </Header>
                            {TimeLine.map((exp, index) => (
                                <Course
                                    $index={0}
                                    $inView={inView}
                                    key={index}
                                    course={exp.course}
                                    date={exp.date}
                                    institution={exp.institution}
                                />
                            ))}
                        </Column>

                        <Column>
                            <SectionGroup>
                                <Header
                                    style={{ marginBottom: "1rem" }}
                                    $index={1}
                                    $inView={inView}
                                >
                                    Languages
                                </Header>
                                {Languages.map((lng, index) => (
                                    <Language
                                        $index={1}
                                        $inView={inView}
                                        key={index}
                                        language={lng.language}
                                        level={lng.level}
                                    />
                                ))}
                            </SectionGroup>
                            <SectionGroup>
                                <Header
                                    style={{ marginBottom: "1rem" }}
                                    $index={1}
                                    $inView={inView}
                                >
                                    Hobbies
                                </Header>
                                {Hobbies.map((hobbie, index) => (
                                    <Hobbie
                                        $index={index}
                                        $inView={inView}
                                        key={index}
                                        name={hobbie.name}
                                        image={hobbie.image}
                                    />
                                ))}
                            </SectionGroup>
                        </Column>
                    </TwoColumnLayout>
                )}
            </InView>
        </Container>
    );
};

const Container = styled.div`
    ${tw`relative flex flex-col gap-20 self-center w-full h-auto pt-14 mt-16 justify-center rounded-[10px] px-14 z-20`}

    @media (max-width: 1065px) {
        padding: 0 2rem;
    }
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
`;

const ResponsiveDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5rem;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1065px) {
        flex-direction: column;
        gap: 3rem;
    }
`;

const TwoColumnLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    align-self: center;
    gap: 5rem;

    @media (max-width: 1065px) {
        flex-direction: column;
        gap: 3rem;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        flex: 1;
    }
`;

const SectionGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const Section = styled.div`
    ${tw`flex flex-col items-center gap-7 w-full`}
    max-width: 100%;
`;

const Header = styled.div<{ $inView: boolean; $index: number }>`
    ${tw`flex flex-col gap-5 text-4xl text-white text-center w-full tracking-[2px] leading-[3rem]`}
    opacity: ${({ $inView }) => ($inView ? 1 : 0)};
    transform: ${({ $inView, $index }) =>
        $inView
            ? "translateX(0)"
            : $index === 0
            ? "translateX(-1rem)"
            : "translateX(1rem)"};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        line-height: 2.4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
        line-height: 2rem;
    }
`;

const Content = styled.div<{ $inView: boolean; $index: number }>`
    ${tw`flex flex-col justify-center items-center text-white text-center`}
    width: 100%;
    padding: 0 1rem;
    line-height: 1.6rem;
    font-size: 0.95rem;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.8rem;
    }
`;

const Institution = tw.h3`text-xl text-white tracking-wider font-semibold max-h-16 text-center mb-2`;
const Date = tw.h3`text-sm text-gray-50 text-center tracking-wider`;
const Subject = tw.h2`text-base text-gray-50 tracking-wider text-center`;

interface TimeLineProps extends TimeLine {
    $index?: number;
    $inView?: boolean;
}

const Course: React.FC<TimeLineProps> = ({ course, date, institution }) => {
    return (
        <div className="flex flex-col items-center gap-2 w-full mb-5">
            <div className="flex flex-col justify-center items-center">
                <Institution>{institution}</Institution>
                <Date>{date}</Date>
            </div>
            <Subject>{course}</Subject>
        </div>
    );
};

const Langue = styled.h2`
    ${tw`text-xl text-gray-50 tracking-widest font-semibold`}
    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;
const Level = styled.h3`
    ${tw`text-md text-gray-50 tracking-widest font-bold`}
    @media (max-width: 480px) {
        font-size: 0.875rem;
    }
`;

interface LanguageProps extends Languages {
    $index?: number;
    $inView?: boolean;
}

const Language: React.FC<LanguageProps> = ({ language, level }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-row items-center gap-4 w-full max-w-[300px]">
                <div className="w-1/2 text-left flex justify-end">
                    <Langue>{language}</Langue>
                </div>
                <Level>{level}</Level>
            </div>
        </div>
    );
};

const HobbieName = styled.h2`
    ${tw`text-xl text-gray-50 tracking-widest font-semibold`}
    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const ImageContainer = styled.div<{ $index?: number }>`
    width: 33.33%;
    height: ${({ $index }) => ($index == 0 ? "33px" : "36px")};
`;

interface HobbieStructure extends HobbiesProps {
    $index?: number;
    $inView?: boolean;
}

const Hobbie: React.FC<HobbieStructure> = ({ name, image, $index }) => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="flex flex-col items-center gap-2 w-full max-w-[300px] mb-3 h-full">
                <HobbieName>{name}</HobbieName>
                <ImageContainer $index={$index}>{image}</ImageContainer>
            </div>
        </div>
    );
};
