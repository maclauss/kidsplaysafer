import styled from "styled-components";

import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 35px;
  z-index: 2;
`;

export const StartContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const WelcomeMessage = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: #ffffff;
`;

export const Choose = styled.div`
  width: 150px;
  margin-bottom: 100px;
  font-size: 55px;
  text-shadow: 3px 3px #42210b;

  color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
`;

export const Input = styled.input`
  border: 0;
  height: 30px;
  margin-bottom: 40px;
  border-bottom: 3px solid #ffffff;
  box-shadow: none;
  outline: none;
  border-radius: 0;
  background: transparent;
  text-align: center;
  font-size: 24px;

  &,
  &::placeholder {
    color: #ffffff;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const ChooseAvatar = styled.button`
  padding: 5px 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
  font-size: 24px;
`;
