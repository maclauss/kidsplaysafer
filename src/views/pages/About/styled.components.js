import styled from "styled-components";

import { ReactComponent as Top } from "../../assets/icons/homeTop.svg";
import Background from "../../assets/icons/background.png";

export const AboutWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledTop = styled(Top)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
