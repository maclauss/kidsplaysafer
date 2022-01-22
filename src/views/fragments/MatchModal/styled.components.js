import styled from "styled-components";

import Background from "../../assets/icons/background.png";
import { ReactComponent as Top } from "../../assets/icons/confettiTop.svg";
import { ReactComponent as DesktopTop } from "../../assets/icons/blackTop.svg";
import { ReactComponent as desktopConfetti } from "../../assets/icons/desktopConfetti.svg";
import { ReactComponent as DesktopBottom } from "../../assets/icons/console.svg";

export const MatchModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Background});
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &,
  & > * {
    z-index: 3;
  }
`;

export const StyledTop = styled(Top)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledDesktopTop = styled(DesktopTop)`
  width: 40%;
`;

export const StyledConfetti = styled(desktopConfetti)`
  width: 1200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const StyledDesktopBottom = styled(DesktopBottom)`
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
  z-index: 2;
`;

export const QuestionNumber = styled.div`
  margin: 36px 0 16px;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "" : "80px")};
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 24px;
  color: #fbae17;
  text-shadow: 3px 3px #42210b;
`;

export const ModalHeader = styled.div`
  width: 300px;
  margin-bottom: 24px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 50px;
  color: ${({ isAnswersMatch }) => (isAnswersMatch ? "#00ff00" : "#ed1c24")};
  text-shadow: 3px 3px #42210b;
`;

export const ModalContent = styled.div`
  width: ${({ isSmallScreen }) => (isSmallScreen ? "240px" : "350px")};
  margin-bottom: ${({ isSmallScreen }) => (isSmallScreen ? "280px" : "24px")};
  font-size: 24px;
  color: #ffffff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 300px;
`;

export const StyledAvatar = styled.img`
  margin: ${({ isSmallScreen }) => (isSmallScreen ? "" : "0 150px")};
  height: 150px;
  width: 150px;
`;

export const StyledButton = styled.button`
  height: 50px;
  width: 250px;
  padding: 5px 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ isReview, isEndQuiz }) =>
    isReview ? "#00ff00" : isEndQuiz ? "#ed1c24" : "#fbae17"};
  font-size: 24px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
