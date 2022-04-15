import styled from "styled-components";

export const AboutContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const About = styled.div`
  margin-bottom: 18px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 60px;
  color: #db24fc;
  text-shadow: 3px 3px #42210b;
`;

export const ParagraphContainer = styled.div`
  overflow: auto;
  height: 300px;
  width: 900px;
  padding: 0 20px;
  margin-bottom: 32px;
`;

export const Paragraph = styled.div`
  font-size: 18px;
  color: #ffffff;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FooterContent = styled.div`
  color: #ffffff;
  text-align: center;
`;

export const StyledLogo = styled.img`
  width: 200px;
  filter: brightness(0) invert(1);
`;
