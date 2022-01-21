import { useScreenSize } from "../../../hooks/useScreenSize";

import { ContactWrapper, StyledTop } from "./styled.components";
import HomeNavbar from "../../fragments/HomeNavbar";
import ContactDesktopContent from "../../fragments/ContactDesktopContent";
import ContactContent from "../../fragments/ContactContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <ContactWrapper>
      {!isSmallScreen && (
        <>
          <HomeNavbar />
          <ContactDesktopContent />
        </>
      )}
      {isSmallScreen && (
        <>
          <StyledTop />
          <ContactContent />
        </>
      )}
    </ContactWrapper>
  );
};

export default Home;
