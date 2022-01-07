import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

export const AvatarSelectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledCarousel = styled(Carousel)`
  margin: 60px 0 30px;
`;

export const WelcomeMessage = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: #ffffff;
`;

export const Choose = styled.div`
  width: 150px;
  margin-bottom: 30px;
  font-size: 55px;
  text-shadow: 3px 3px #42210b;

  color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
`;

export const ChooseAvatar = styled.button`
  padding: 5px 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ isParent }) => (isParent ? "#fbae17" : "#00ff00")};
  font-size: 24px;
`;
