import styled from "styled-components";

export const HomeContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const About = styled.div`
  margin: 16px 0 5px;
  font-size: 60px;
  color: #db24fc;
  text-shadow: 3px 3px #42210b;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 25px;
  justify-content: space-around;
`;

export const Link = styled.button`
  width: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 18px;
  color: #ffffff;
  padding: 5px;
`;

export const ParagraphContainer = styled.div`
  overflow: scroll;
  height: 300px;
  padding: 5px 5px 10px 5px;
`;

export const Paragraph = styled.p`
  color: white;
  margin: 6px 5px 15px 5px;
`;
