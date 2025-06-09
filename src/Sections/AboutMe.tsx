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
                    <ResponsiveDiv>
                        {[0, 1].map((_, idx) => (
                            <Content
                                ref={ref}
                                key={idx}
                                $inView={inView}
                                $index={idx}
                            >
                                {idx > 0 ? (
                                    <div className="w-[87%] flex flex-col gap-16 items-center">
                                        <div className="w-[80%] flex flex-col gap-5">
                                            <Header
                                                style={{
                                                    marginBottom: "1rem",
                                                }}
                                                key={idx}
                                                $index={idx}
                                                $inView={inView}
                                            >
                                                Languages
                                            </Header>
                                            {Languages.map((lng, index) => (
                                                <Language
                                                    $index={idx}
                                                    $inView={inView}
                                                    key={index}
                                                    language={lng.language}
                                                    level={lng.level}
                                                />
                                            ))}
                                        </div>
                                        <div className="w-[80%] flex flex-col gap-5">
                                            <Header
                                                style={{
                                                    marginBottom: "1rem",
                                                }}
                                                key={idx}
                                                $index={idx}
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
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-[87%] flex flex-col gap-8">
                                        <Header
                                            key={idx}
                                            style={{ marginBottom: "1rem" }}
                                            $index={idx}
                                            $inView={inView}
                                        >
                                            Timeline
                                        </Header>
                                        {TimeLine.map((exp, index) => (
                                            <Course
                                                $index={idx}
                                                $inView={inView}
                                                key={index}
                                                course={exp.course}
                                                date={exp.date}
                                                institution={exp.institution}
                                            />
                                        ))}
                                    </div>
                                )}
                            </Content>
                        ))}
                    </ResponsiveDiv>
                )}
            </InView>
        </Container>
    );
};

const Container = styled.div`
    ${tw`relative flex flex-col gap-20 self-center w-[100%] h-auto pt-14 mt-10 justify-center  rounded-[10px] pl-[2.4rem] px-14 z-20  [box-shadow: inset 0 -50px 70px 50px black, 0 -50px 70px 50px black;]`}

    @media (max-width: 1472px) {
        min-height: 0px;
        padding-top: 0px;
    }
    @media (max-width: 1355px) {
        width: 95%;
    }
    @media (max-width: 1093px) {
        margin-top: 3rem;
    }
    @media (max-width: 1065px) {
        padding-right: 50px
        padding-left: 50px;
    }
`;

const ResponsiveDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: around;
    width: 100%;
    height: auto;

    @media (max-width: 1065px) {
        display: flex;
        align-items: start;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        gap: 2rem;
        margin: 0px 100px;
    }
`;

const Section = styled.div`
    ${tw`flex flex-col flex-1 w-full items-center gap-7 h-full text-md tracking-wide [letter-spacing: 0.2rem]`}

    @media (max-width: 414px) {
        display: flex;
        justify-content: left;
    }
`;

const Header = styled.div<{ $inView: boolean; $index: number }>`
    ${tw`flex flex-col gap-5 text-4xl text-white text-center w-full h-[17%] tracking-[2px] leading-[3rem] z-10`}

    opacity: ${({ $inView }) => ($inView ? 1 : 0)};
    transform: ${({ $inView, $index }) =>
        $index === 0
            ? $inView
                ? "translateX(0.2rem)"
                : "translateX(-1rem)"
            : $inView
            ? "translateX(-1rem)"
            : "translateX(0.2rem)"};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;

    @media (max-width: 950px) {
        width: 90%;
    }
    @media (max-width: 758px) {
        transform: ${({ $inView, $index }) =>
            $index === 0
                ? $inView
                    ? "translateX(1rem)"
                    : "translateX(-1rem)"
                : $inView
                ? "translateX(-1rem)"
                : "translateX(1rem)"};
        transition: opacity 1.3s ease-in-out, transform 1.6s ease-in-out;
    }
    @media (max-width: 600px) {
        width: 80%;
        font-size: 2rem;
    }
    @media (max-width: 465px) {
        font-size: 1.5rem;
        line-height: 2rem;
        gap: 1rem;
        padding-top: 0rem;
        margin-top: 0rem;
        left: 0;
    }
    @media (max-width: 400px) {
        font-size: 1.3rem;
        line-height: 1.6rem;
    }
`;

const Content = styled.div<{ $inView: boolean; $index: number }>`
    ${tw`flex flex-col justify-center items-center text-white text-center w-[70%] h-[17%] leading-[3rem]`}

    opacity: ${({ $inView }) => ($inView ? 1 : 0)};
    transform: ${({ $inView, $index }) =>
        $index === 0
            ? $inView
                ? "translateX(0.2rem)"
                : "translateX(-1rem)"
            : $inView
            ? "translateX(-1rem)"
            : "translateX(0.2rem)"};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;

    @media (max-width: 950px) {
        width: 90%;
    }
    @media (max-width: 758px) {
        transform: ${({ $inView, $index }) =>
            $index === 0
                ? $inView
                    ? "translateX(1rem)"
                    : "translateX(-1rem)"
                : $inView
                ? "translateX(-1rem)"
                : "translateX(1rem)"};
        transition: opacity 1.3s ease-in-out, transform 1.6s ease-in-out;
    }
    @media (max-width: 600px) {
        width: 80%;
        font-size: 2rem;
    }
    @media (max-width: 465px) {
        font-size: 1.5rem;
        line-height: 2rem;
        gap: 1rem;
        padding-top: 0rem;
        margin-top: 0rem;
        left: 0;
    }
    @media (max-width: 400px) {
        font-size: 1.3rem;
        line-height: 1.6rem;
    }
`;

const Institution = tw.h3`
text-l text-white tracking-wider font-semibold max-h-14
`;
const Date = tw.h3`text-sm text-gray-50 text-center tracking-wider`;
const Subject = tw.h2`text-[1.1rem] text-gray-50 tracking-wider`;

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

const Langue = tw.h2`text-xl text-gray-50 tracking-widest font-semibold`;
const Level = tw.h3`text-md text-gray-50 tracking-widest font-bold`;

interface LanguageProps extends Languages {
    $index?: number;
    $inView?: boolean;
}

const Language: React.FC<LanguageProps> = ({ language, level }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-row items-center gap-4 w-[300px]">
                <div className="w-1/2 text-left flex justify-end">
                    <Langue>{language}</Langue>
                </div>
                <div className="w-1/2 text-left">
                    <Level>{level}</Level>
                </div>
            </div>
        </div>
    );
};

const HobbieName = tw.h2`text-xl text-gray-50 tracking-widest font-semibold`;
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
            <div className="flex flex-row items-center gap-0 w-[300px] h-full">
                <div className="w-1/2 text-left flex justify-end">
                    <HobbieName>{name}</HobbieName>
                </div>
                <ImageContainer $index={$index} className="w-1/3 h-[36px]">
                    {image}
                </ImageContainer>
            </div>
        </div>
    );
};
