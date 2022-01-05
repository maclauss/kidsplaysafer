import styled from "styled-components";

import Background from "../../assets/icons/background.png";
import { ReactComponent as Banner } from "../../../views/assets/icons/startBanner.svg";

export const StartWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledBanner = styled(Banner)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
