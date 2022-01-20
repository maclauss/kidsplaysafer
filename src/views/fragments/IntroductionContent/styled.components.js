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
  top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  width: 30%;
`;

export const ParagraphContainer = styled.div`
  width: calc(100% - 50px);
  padding: 10px;
  border-radius: 15px;
  background-color: #db24fc;
  color: #ffffff;
  text-align: center;
`;

export const ParagraphHeader = styled.div`
  margin-bottom: 16px;
  font-size: 30px;
`;

export const Paragraph = styled.div`
  font-size: 20px;

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
  background-color: #00ff00;
  z-index: 2;
`;
