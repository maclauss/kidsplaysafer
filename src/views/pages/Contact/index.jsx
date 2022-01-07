import { useScreenSize } from "../../../hooks/useScreenSize";

import { ContactWrapper, StyledTop } from "./styled.components";
import ContactContent from "../../fragments/ContactContent";

const Home = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <ContactWrapper>
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
