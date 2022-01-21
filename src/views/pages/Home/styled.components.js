import styled from "styled-components";

import Background from "../../assets/icons/background.png";
import { ReactComponent as desktopConfetti } from "../../assets/icons/desktopConfetti.svg";
import { ReactComponent as consoleBackground } from "../../assets/icons/consoleBackground.svg";
import { ReactComponent as Top } from "../../assets/icons/logoTop.svg";
import { ReactComponent as Bottom } from "../../assets/icons/bottom.svg";

export const HomeWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledConfetti = styled(desktopConfetti)`
  width: 1200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const DesktopBackground = styled(consoleBackground)`
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
`;

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
