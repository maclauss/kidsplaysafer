import styled from "styled-components";

import { ReactComponent as KPSLogo } from "../../assets/icons/logo.svg";
import { ReactComponent as Bottom } from "../../assets/icons/bottom.svg";
import Background from "../../assets/icons/background.png";

export const HomeWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledLogo = styled(KPSLogo)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledBottom = styled(Bottom)`
  position: absolute;
  bottom: -16px;
  left: 0;
`;
