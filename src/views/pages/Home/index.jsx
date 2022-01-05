import { useScreenSize } from "../../../hooks/useScreenSize";

import { HomeWrapper, StyledTop, StyledBottom } from "./styled.components";
import HomeContent from "../../fragments/HomeContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <HomeWrapper>
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
