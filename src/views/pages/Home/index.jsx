import { useScreenSize } from "../../../hooks/useScreenSize";

import Logo from "../../assets/icons/logo.png";

import {
  HomeWrapper,
  StyledLogo,
  StyledTop,
  StyledBottom,
} from "./styled.components";
import HomeContent from "../../fragments/HomeContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <HomeWrapper>
      {!isSmallScreen && (
        <div
          style={{
            position: "absolute",
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
            fontSize: "60px",
            textAlign: "center",
          }}
        >
          <StyledLogo src={Logo} />
          <div>Desktop version coming soon!</div>
        </div>
      )}
      {isSmallScreen && (
        <>
          <StyledTop />
          <StyledBottom />
          <HomeContent />
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
