import { useScreenSize } from "../../../hooks/useScreenSize";

import { HomeWrapper, StyledLogo, StyledBottom } from "./styled.components";
import HomeContent from "../../fragments/HomeContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <HomeWrapper>
      {isSmallScreen && (
        <>
          <StyledLogo />
          <StyledBottom />
          <HomeContent />
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
