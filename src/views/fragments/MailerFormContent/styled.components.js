import styled from "styled-components";

export const MailerFormContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: ${({ isSmallScreen }) => (isSmallScreen ? "190px" : "250px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Thanks = styled.div`
  width: ${({ isSmallScreen }) => (isSmallScreen ? "220px" : "600px")};
  margin-bottom: 18px;
  font-family: "Bangers", "Open Sans", sans-serif;
  font-size: 50px;
  color: #00ff00;
  text-shadow: 3px 3px #42210b;
`;

export const SignUp = styled.div`
  width: ${({ isSmallScreen }) => (isSmallScreen ? "200px" : "400px")};
  margin-bottom: 16px;
  color: #ffffff;
`;

export const Input = styled.input`
  border: 0;
  height: 40px;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "300px" : "600px")};
  padding-left: 18px;
  margin-bottom: 8px;
  outline: none;
  border-radius: 50px;
  font-size: 24px;
`;

export const Submit = styled.button`
  height: 40px;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "300px" : "600px")};
  margin-bottom: 18px;
  border-radius: 50px;
  border: none;
  background-color: #00ff00;
  font-size: 20px;
`;

export const Skip = styled.button`
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
`;
