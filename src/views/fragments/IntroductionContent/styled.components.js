import styled from "styled-components";

import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";
import { ReactComponent as NextButton } from "../../assets/icons/nextButton.svg";

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 35px;
  z-index: 2;
`;

export const IntroductionContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const ListItem = styled.li`
  text-align: left;
  margin: 5px;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Intro = styled.div`
  margin-bottom: 18px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 50px;
  color: #00ff00;
  text-shadow: 3px 3px #42210b;
`;

export const AvatarImage = styled.img`
  width: ${({ isSmallScreen }) => (isSmallScreen ? "30%" : "200px")};
`;

export const ParagraphContainer = styled.div`
  width: ${({ isSmallScreen }) =>
    isSmallScreen ? "calc(100% - 50px)" : "500px"};
  padding: 5px;
  border-radius: 15px;
  background-color: #db24fc;
  color: #ffffff;
  text-align: center;
  max-height: 235px;
  overflow: auto;
  margin-bottom: 10px;
`;

export const ParagraphContainer2 = styled.div`
  width: ${({ isSmallScreen }) =>
    isSmallScreen ? "calc(100% - 50px)" : "500px"};
  padding: 5px;
  border-radius: 15px;
  background-color: #db24fc;
  color: #ffffff;
  text-align: center;
  max-height: 235px;
  overflow: auto;
  margin-bottom: 10px;
`;

export const ParagraphHeader = styled.div`
  margin-bottom: 16px;
  font-size: 30px;
`;

export const Paragraph = styled.div`
  font-size: 20px;
  color: white;
  &:not(:last-child) {
  }
`;
export const StepText = styled.div`
  margin-top: 3px;
  color: white;
  font-size: 0.8rem;
`;
export const StyledNextButton = styled(NextButton)`
  position: absolute;
  left: 50%;
  top: ${({ isSmallScreen }) => (isSmallScreen ? "620px" : "690px")};
  transform: translateX(-50%);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #00ff00;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "25px" : "55px")};
  z-index: 2;
`;

export const StyledNextButton2 = styled.button`
  position: absolute;
  left: 50%;
  top: ${({ isSmallScreen }) => (isSmallScreen ? "620px" : "690px")};
  transform: translateX(-50%);
  height: 35px;
  width: 150px;
  border-radius: 25px;
  background-color: #00ff00;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "25px" : "55px")};
  z-index: 2;
`;
