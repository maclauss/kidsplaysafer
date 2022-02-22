import styled from "styled-components";
import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";

export const ComingSoon = styled.div`
  color: #db24fc;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? "80px" : "150px")};
  text-algin: center;
  width: 100px;
  position: absolute;
  top: ${({ isSmallScreen }) => (isSmallScreen ? "300px" : "320px")};
  left: ${({ isSmallScreen }) => (isSmallScreen ? "70px" : "560px")};
  text-shadow: 3px 3px #42210b;
  font-family: "Bangers", "Open Sans", sans-serif;
`;

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 35px;
  z-index: 2;
`;
