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

export const Welcome = styled.div`
  margin: 16px 0 24px;
  font-size: 60px;
  color: #00ff00;
  text-shadow: 3px 3px #42210b;
`;

export const StartButton = styled.button`
  padding: 5px 30px;
  margin-bottom: 48px;
  border-radius: 15px;
  border: none;
  background-color: #db24fc;
  font-size: 24px;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled.button`
  width: 80px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #ffffff;
`;
