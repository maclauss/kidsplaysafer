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

export const AboutContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const About = styled.div`
  margin-bottom: 18px;
  font-size: 60px;
  color: #db24fc;
  text-shadow: 3px 3px #42210b;
`;

export const ParagraphContainer = styled.div`
  overflow: scroll;
  height: 300px;
  width: calc(100% - 50px);
  max-width: 400px;
  padding: 0 20px;
`;

export const Paragraph = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: #ffffff;
  text-align: justify;
`;
