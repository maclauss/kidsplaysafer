import styled from "styled-components";

import Background from "../../assets/icons/background.png";
import { ReactComponent as Top } from "../../assets/icons/logoTop.svg";
import { ReactComponent as DesktopTop } from "../../assets/icons/desktopLogoTop.svg";
import { ReactComponent as desktopConfetti } from "../../assets/icons/desktopConfetti.svg";
import { ReactComponent as consoleBackground } from "../../assets/icons/console.svg";

export const MailerFormWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledTop = styled(Top)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledDesktopTop = styled(DesktopTop)`
  width: 500px;
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
