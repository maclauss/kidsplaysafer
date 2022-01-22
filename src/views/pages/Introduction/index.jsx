import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  IntroWrapper,
  StyledTop,
  StyledBottom,
  StyledDesktopTop,
  StyledDesktopBottom,
} from "./styled.components";
import Navbar from "../../fragments/Navbar";
import IntroductionContent from "../../fragments/IntroductionContent";

const Introduction = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <IntroWrapper>
      <>
        {!isSmallScreen && (
          <Navbar>
            <StyledDesktopTop />
          </Navbar>
        )}
        {isSmallScreen && <StyledTop />}
        {isSmallScreen ? <StyledBottom /> : <StyledDesktopBottom />}
        <IntroductionContent />
      </>
    </IntroWrapper>
  );
};

export default Introduction;
