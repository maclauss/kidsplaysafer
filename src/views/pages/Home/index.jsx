import { useScreenSize } from "../../../hooks/useScreenSize";

import { HomeWrapper, StyledTop, StyledBottom } from "./styled.components";
import HomeContent from "../../fragments/HomeContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <HomeWrapper>
      {!isSmallScreen && (
        <div
          style={{
            height: "100vh",
            position: "absolute",
            top: "50vh",
            left: "50vh",
            fontSize: "60px",
          }}
        >
          Desktop version coming soon!
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
