import styled, { css } from "styled-components";

import { ReactComponent as BackButton } from "../../assets/icons/backButton.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Web } from "../../assets/icons/web.svg";

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 35px;
  z-index: 2;
`;

export const ContactContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Contact = styled.div`
  margin-bottom: 48px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 60px;
  color: #db24fc;
  text-shadow: 3px 3px #42210b;
`;

const svgStyles = css`
  height: 45px;
  width: 45px;
  margin-bottom: 8px;
`;

export const StyledEmail = styled(Email)`
  ${svgStyles}
`;

export const StyledWeb = styled(Web)`
  ${svgStyles}
`;

export const ContactDetail = styled.div`
  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-size: 24px;
  color: #ffffff;
`;
