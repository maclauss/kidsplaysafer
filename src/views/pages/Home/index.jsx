import { useScreenSize } from "../../../hooks/useScreenSize";

import { HomeWrapper, StyledLogo, StyledBottom } from "./styled.components";
import HomeContent from "./components/HomeContent";

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
