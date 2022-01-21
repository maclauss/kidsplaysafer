import styled, { css } from "styled-components";

import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Web } from "../../assets/icons/web.svg";

export const ContactContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 250px;
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

export const ContactDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContactDetail = styled.div`
  width: 300px;
  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-size: 24px;
  color: #ffffff;
`;
