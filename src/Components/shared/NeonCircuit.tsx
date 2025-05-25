import styled from 'styled-components';
import tw from 'twin.macro';

const CircuitContainer = tw.div`
  relative w-[200px] h-screen bg-gradient-to-b from-[#061a1a] to-[#010101]
  flex justify-center items-center overflow-hidden
`;

const MainLine = styled.div`
  ${tw`relative w-[2px] h-full`}
  background: linear-gradient(to bottom, #00f0ff, #00f0ff, #00f0ff);
  filter: drop-shadow(0 0 6px #00f0ff);
`;

interface BranchProps {
  position: number;
  side: 'left' | 'right';
}



const Branch = styled.div<BranchProps>`
  ${tw`absolute w-[60px] h-[60px] border-[2px] rounded-t-full border-b-0`}
  top: ${({ position }) => `${position}%`};
  ${({ side }) => (side === 'left' ? tw`-left-[30px] -rotate-45` : tw`left-[30px] rotate-45`)};
  border-color: #00f0ff;
  background: transparent;
  filter: drop-shadow(0 0 6px #00f0ff);
`;

const Pulse = styled.div<{ position: number }>`
  ${tw`absolute w-[8px] h-[8px] bg-[#00f0ff] rounded-full`}
  top: ${({ position }) => `${position}%`};
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 12px #00f0ff, 0 0 24px #00f0ff;
`;

const NeonCircuit = () => {
  return (
    <CircuitContainer>
      <MainLine>
        <Pulse position={10} />
        <Branch position={12} side="left" />

        <Pulse position={30} />
        <Branch position={32} side="right" />

        <Pulse position={50} />
        <Branch position={55} side="left" />

        <Pulse position={70} />
        {/* You can add more branches and pulses if needed */}
      </MainLine>
    </CircuitContainer>
  );
};

export default NeonCircuit;
