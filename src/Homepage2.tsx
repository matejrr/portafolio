import tw from "twin.macro";
import { Header } from "./Components/layout/header/Header";
import { AboutMe } from "./Sections/AboutMe";
import { WelcomeSection } from "./Sections/WelcomeSection";
import { WorkSection } from "./Sections/WorksSection";
import { SkillsSection } from "./Sections/SkillsSection";
import { QuickMessage } from "./Sections/QuickMessage";
import { ProjectsSection } from "./Sections/ProjectsSection";
import Contact from "./Sections/Contact";

const HomePage2: React.FC = () => {
    const backgroundCells = Array.from({ length: 4000 });

    return (
        <div className="box-border overflow-x-visible">
            <PageContainer>
                <GridLayout>
                    {backgroundCells.map((_, i) => (
                        <div
                            key={i}
                            className="
                            border border-[#030b0a] transition ease-out
                            hover:rounded-[12%] hover:border-[#121212]
                          "
                        />
                    ))}
                </GridLayout>
                <div className="flex flex-col w-full min-h-screen overflow-x-clip">
                    <Header />
                    <WelcomeSection />
                    <WorkSection />
                    <SkillsSection />
                    <QuickMessage />
                    <ProjectsSection />
                    <div className=" relative h-full w-full mt-[40rem]">
                        <AboutMe />
                    </div>
                    <Contact />
                </div>
            </PageContainer>
        </div>
    );
};

export default HomePage2;

const PageContainer = tw.div`h-[100%] w-[100%] relative`;

const GridLayout = tw.div` w-[100%] h-[100%] grid grid-cols-80 grid-rows-50 inset-0 absolute pointer-events-none`;
