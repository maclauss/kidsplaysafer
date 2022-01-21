import styled from "styled-components";

export const HomeContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Welcome = styled.div`
  margin-bottom: 18px;
  font-family: "Bangers", "Open Sans", sans-serif;
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
