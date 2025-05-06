import tw from "twin.macro";
import { Header } from "./Components/ui/header/Header";
import { useCallback, useEffect, useRef, useState } from "react";
import WelcomeSection from "./Sections/WelcomeSection";
import WorkSection from "./Sections/WorkSection";
import SkillsSection from "./Sections/SkillsSection";
import QuickMessage from "./Sections/QuickMessage";

const HomePage2: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

    const requestRef = useRef<number | undefined>(undefined);
    const smoothing = 0.04;

    const animate = useCallback(() => {
        setSmoothPosition((prev) => ({
            x: prev.x + (mousePosition.x - prev.x) * smoothing,
            y: prev.y + (mousePosition.y - prev.y) * smoothing,
        }));
        requestRef.current = requestAnimationFrame(animate);
    }, [mousePosition, smoothing]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current!);
    }, [animate]);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const backgroundCells = Array.from({ length: 4000 });

    return (
        <div
            onMouseMove={handleMouseMove}
            className="box-border overflow-x-visible"
        >
            {/* Light follows smooth cursor position */}
            <div
                className="pointer-events-none fixed inset-0 z-10"
                style={{
                    background: `radial-gradient(circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(0,255,0,0.2), 50px, transparent 200px)`,
                    mixBlendMode: "screen",
                }}
            />
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
                <div className="flex flex-col w-full min-h-screen">
                    <Header />
                    <WelcomeSection />
                    <WorkSection />
                    <SkillsSection />
                    <QuickMessage />
                </div>
            </PageContainer>
        </div>
    );
};

export default HomePage2;

const PageContainer = tw.div`h-[100%] w-[100%] relative`;

const GridLayout = tw.div` w-[100%] h-[100%] grid grid-cols-80 grid-rows-50 inset-0 absolute pointer-events-none`;
