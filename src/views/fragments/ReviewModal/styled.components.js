import styled from "styled-components";

import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";
import { ReactComponent as Top } from "../../assets/icons/altTop.svg";
import { ReactComponent as Bottom } from "../../assets/icons/bottom.svg";
import { ReactComponent as DesktopBottom } from "../../assets/icons/desktopAltBottom.svg";

export const StyledTop = styled(Top)`
  width: ${({ isSmallScreen }) => (isSmallScreen ? "" : "500px")};
  position: ${({ isSmallScreen }) => (isSmallScreen ? "absolute" : "")};
  left: ${({ isSmallScreen }) => (isSmallScreen ? "50%" : "")};
  transform: ${({ isSmallScreen }) =>
    isSmallScreen ? "translateX(-50%)" : "translateY(-40%)"};
`;

export const StyledBottom = styled(Bottom)`
  position: absolute;
  bottom: -16px;
`;

export const StyledDesktopBottom = styled(DesktopBottom)`
  position: absolute;
  bottom: 0;
`;

export const ReviewModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000000;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &,
  & > * {
    z-index: 3;
  }
`;

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 35px;
  z-index: 4;
`;

export const StyledBackButton2 = styled(BackButton)`
  position: absolute;
  bottom: 50px;
  height: 35px;
  width: 35px;
  z-index: 4;
`;

export const StyledBackButtonSideText = styled.p`
  position: absolute;
  bottom: 25px;
  margin-left: 80px;
  height: 35px;
  width: 35px;
  color: white;
  z-index: 4;
`;
export const QuestionNumber = styled.div`
  margin: 36px 0 16px;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "" : "80px")};
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 24px;
  color: #ffffff;
  text-shadow: 3px 3px #42210b;
`;

export const Question = styled.div`
  height: ${({ isSmallScreen }) => (isSmallScreen ? "" : "100px")};
  width: ${({ isSmallScreen }) => (isSmallScreen ? "250px" : "600px")};
  padding: ${({ isSmallScreen }) => (isSmallScreen ? "" : "15px 40px")};
  border-radius: ${({ isSmallScreen }) => (isSmallScreen ? "" : "15px")};
  position: ${({ isSmallScreen }) => (isSmallScreen ? "" : "absolute")};
  top: ${({ isSmallScreen }) => (isSmallScreen ? "" : "330px")};
  color: #ffffff;
  background-color: ${({ isSmallScreen }) => (isSmallScreen ? "" : "#db24fc")};
  font-size: 20px;
  text-align: center;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: ${({ isSmallScreen }) => (isSmallScreen ? "180px" : "280px")};
  display: flex;
  justify-content: ${({ isSmallScreen }) =>
    isSmallScreen ? "space-between" : "center"};
`;

export const StyledAvatar = styled.img`
  height: 150px;
  width: 150px;
  margin: ${({ isSmallScreen }) => (isSmallScreen ? "" : "0 250px")};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 450px;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  justify-content: center;

  > img {
    height: 50px;
    width: 50px;
    margin: 0;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Blank = styled.div`
  height: 50px;
  width: 50px;
`;

export const Choice = styled.div`
  height: 50px;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "250px" : "600px")};
  padding-left: 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  font-size: 18px;
`;
