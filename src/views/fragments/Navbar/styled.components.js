import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 2;
`;

export const Link = styled.button`
  width: 80px;
  margin-top: 30px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #ffffff;
`;
