// import tw from "twin.macro";
// import { Header } from "./Components/ui/header/Header";
// import { useEffect, useRef } from "react";
// import WelcomeSection from "./Sections/WelcomeSection";
// import WorkSection from "./Sections/WorkSection";
// import SkillsSection from "./Sections/SkillsSection";
// import ProjectsSection from "./Sections/QuickMessage";
// import QuickMessage from "./Sections/QuickMessage";

// const HomePage: React.FC = () => {
//     // store the real mouse position here
//     const mousePos = useRef({ x: 0, y: 0 });
//     // store the smoothed position here
//     const smoothPos = useRef({ x: 0, y: 0 });
//     const overlayRef = useRef<HTMLDivElement>(null);

//     const smoothing = 0.01;

//     useEffect(() => {
//         let frameId: number;

//         function animate() {
//             // compute a 1-dimensional spring for both axes
//             smoothPos.current.x +=
//                 (mousePos.current.x - smoothPos.current.x) * smoothing;
//             smoothPos.current.y +=
//                 (mousePos.current.y - smoothPos.current.y) * smoothing;

//             // directly update the overlay’s style
//             if (overlayRef.current) {
//                 overlayRef.current.style.background = `
//           radial-gradient(
//             circle at ${smoothPos.current.x}px ${smoothPos.current.y}px,
//             rgba(0,255,0,0.2) 5px,
//             transparent 200px
//           )
//         `;
//             }

//             frameId = requestAnimationFrame(animate);
//         }

//         frameId = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(frameId);
//     }, []);

//     // onMouseMove just updates the ref — no re-render
//     const handleMouseMove = (e: React.MouseEvent) => {
//         mousePos.current.x = e.clientX;
//         mousePos.current.y = e.clientY;
//     };

//     // still 4000 cells but no per-cell state
//     const backgroundCells = Array.from({ length: 4000 });

//     return (
//         <div onMouseMove={handleMouseMove} className="box-border ">
//             {/* Imperative overlay — React never re-renders for this */}
//             <div
//                 ref={overlayRef}
//                 className="pointer-events-none fixed inset-0 z-10"
//                 style={{ mixBlendMode: "screen" }}
//             />

//             <PageContainer>
//                 <div className="flex flex-col w-full min-h-screen">
//                     <Header />
//                     <WelcomeSection />
//                     <WorkSection />
//                     <SkillsSection />
//                     <QuickMessage />
//                 </div>
//             </PageContainer>
//         </div>
//     );
// };

// export default HomePage;

// const PageContainer = tw.div`h-[100%] w-[100%] relative`;
// const GridLayout = tw.div`absolute inset-0 grid grid-cols-80 grid-rows-50 pointer-events-none`;
