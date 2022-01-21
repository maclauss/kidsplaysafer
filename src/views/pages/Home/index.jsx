import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  HomeWrapper,
  StyledConfetti,
  DesktopBackground,
  StyledTop,
  StyledBottom,
} from "./styled.components";
import HomeNavbar from "../../fragments/HomeNavbar";
import HomeDesktopContent from "../../fragments/HomeDesktopContent";
import HomeContent from "../../fragments/HomeContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <HomeWrapper>
      {!isSmallScreen && (
        <>
          <HomeNavbar />
          <StyledConfetti />
          <DesktopBackground />
          <HomeDesktopContent />
        </>
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
