import styled, { keyframes } from "styled-components";

const BeamExample: React.FC = () => {
    return (
        <div
            style={{
                height: "100vh",
                background: "#0a0a0a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <LightBeam />
        </div>
    );
};

export default BeamExample;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LightBeam = styled.div`
    width: 2px;
    height: 250px;
    background: linear-gradient(180deg, #00ffd1 0%, #00ffa2 100%);
    box-shadow: 0 0 15px #00ffd1, 0 0 30px #00ffa2;
    border-radius: 2px;
    opacity: 0.8;
    animation: ${float} 3s ease-in-out infinite;
`;
