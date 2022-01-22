import styled from "styled-components";

import { ReactComponent as NextButton } from "../../assets/icons/nextButton.svg";

export const Username = styled.div`
  height: 50px;
  width: 160px;
  position: absolute;
  left: ${({ isSmallScreen }) => (isSmallScreen ? "0" : "calc(50% + 24px)")};
  top: ${({ isSmallScreen }) => (isSmallScreen ? "80px" : "150px")};
  background-color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  z-index: 3;
`;

export const QuestionsContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: ${({ isSmallScreen }) => (isSmallScreen ? "36px" : "80px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const QuestionNumber = styled.div`
  margin-bottom: 8px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 24px;
  color: #fbae17;
  text-shadow: 3px 3px #42210b;
`;

export const StyledAvatar = styled.img`
  height: 120px;
  width: 120px;
`;

export const YourTurn = styled.div`
  margin-bottom: 30px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 50px;
  color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
  text-shadow: 3px 3px #42210b;
`;

export const Question = styled.div`
  min-height: 100px;
  max-height: 150px;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "250px" : "600px")};
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #db24fc;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
`;

export const Choice = styled.div`
  height: 50px;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "250px" : "600px")};
  padding: 15px;
  text-align: center;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected, isParent }) =>
    isSelected ? (isParent ? "#fbae17" : "#00ff00") : "#ffffff"};
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledNextButton = styled(NextButton)`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
  z-index: 2;
`;
