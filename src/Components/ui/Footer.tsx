// import styled from "styled-components";
// import Lottie from "react-lottie";
// import * as AnimationInstagaramLogo from "../../assets/animations/AnimationInstagramLogo.json";
// import * as AnimationFacebookLogo from "../../assets/animations/AnimationFacebookLogo.json";
// import { FC } from "react";
// interface FooterProps {
//     isDarkMode: boolean;
// }

// const Footer: FC<FooterProps> = ({ isDarkMode }) => {
//     const defaultInstOptions = {
//         loop: true, // Loop the animation
//         autoplay: true, // Autoplay the animation
//         animationData: AnimationInstagaramLogo, // JSON animation data
//         rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice", // Adjust this based on how you want the animation to be scaled
//         },
//     };

//     const defaultFaceOptions = {
//         loop: true, // Loop the animation
//         autoplay: true, // Autoplay the animation
//         animationData: AnimationFacebookLogo, // JSON animation data
//         rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice", // Adjust this based on how you want the animation to be scaled
//         },
//     };

//     return (
//         <FooterContainer isDarkMode={isDarkMode}>
//             <LeftSection isDarkMode={isDarkMode}>
//                 COPYRIGHT © 2025 MATEJ RUZICKA
//             </LeftSection>
//             <RightSection>
//                 <Text isDarkMode={isDarkMode}>
//                     SWING BY <div>?</div>
//                 </Text>
//                 <Animations>
//                     <Lottie
//                         options={defaultInstOptions}
//                         height={75}
//                         width={50}
//                     />
//                    <Lottie options={defaultFaceOptions} height={75} width={50}/>
//                 </Animations>
//             </RightSection>
//         </FooterContainer>
//     );
// };

// export default Footer;

// const FooterContainer = styled.div<{ isDarkMode: boolean }>(
//     ({ isDarkMode }) => ({
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "0px 45px",
//         flex: 1,
//         height: "6rem",
//         backgroundColor: isDarkMode ? "rgb(3, 2, 21)" : "rgb(245, 246, 245)",
//         borderTopColor: "lightgray",
//         borderTopWidth: "1px",
//         borderStyle: "solid",
//     })
// );

// const LeftSection = styled.div<{ isDarkMode: boolean }>((props) => ({
//     fontSize: "0.71rem",
//     color: props.isDarkMode ? "white" : "slateGray",
//     wordSpacing: "4.8px",
//     letterSpacing: 1.5,
//     display: "flex",
//     flex: 5,
// }));

// const Text = styled.div<{ isDarkMode: boolean }>((props) => ({
//     display: "flex",
//     fontSize: "0.71rem",
//     color: props.isDarkMode ? "white" : "slateGray",
//     wordSpacing: "4.8px",
//     letterSpacing: 1.5,
// }));

// const RightSection = styled.div({
//     display: "flex",
//     justifyContent: "right",
//     alignItems: "center",
//     flex: 1, // Default width
//     gap: 20,
// });

// const Animations = styled.div({
//     display: "flex",
// });
