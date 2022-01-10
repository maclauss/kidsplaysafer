import styled from "styled-components";

import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";
import { ReactComponent as Top } from "../../assets/icons/altTop.svg";
import { ReactComponent as Bottom } from "../../assets/icons/bottom.svg";

export const StyledTop = styled(Top)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledBottom = styled(Bottom)`
  position: absolute;
  bottom: -16px;
  left: 0;
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

export const QuestionNumber = styled.div`
  margin: 36px 0 16px;
  font-size: 24px;
  color: #ffffff;
  text-shadow: 3px 3px #42210b;
`;

export const Question = styled.div`
  width: 250px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 180px;
  display: flex;
  justify-content: space-between;
`;

export const StyledAvatar = styled.img`
  height: 150px;
  width: 150px;
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
  width: 250px;
  padding-left: 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  font-size: 18px;
`;
