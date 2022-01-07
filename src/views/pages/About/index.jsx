import { useScreenSize } from "../../../hooks/useScreenSize";

import { AboutWrapper, StyledTop } from "./styled.components";
import AboutContent from "../../fragments/AboutContent";

const About = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <AboutWrapper>
      {isSmallScreen && (
        <>
          <StyledTop />
          <AboutContent />
        </>
      )}
    </AboutWrapper>
  );
};

export default About;
