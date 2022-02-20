import styled from "styled-components";

import Background from "../../assets/icons/background.png";
import { ReactComponent as Top } from "../../assets/icons/logoTop.svg";

export const ResourceWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const StyledTop = styled(Top)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
