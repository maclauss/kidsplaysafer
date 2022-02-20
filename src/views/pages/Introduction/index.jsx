import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  IntroWrapper,
  StyledDesktopTop,
  StyledDesktopBottom,
  StyledTop,
  StyledBottom,
} from "./styled.components";
import Navbar from "../../fragments/Navbar";
import IntroductionContent from "../../fragments/IntroductionContent";

const Introduction = () => {
  const { isSmallScreen } = useScreenSize();
  
  return (
    <IntroWrapper isSmallScreen={isSmallScreen}	>
      <>
        {!isSmallScreen && (
          <>
            <Navbar>
              <StyledDesktopTop />
            </Navbar>
            <StyledDesktopBottom />
          </>
        )}
        {isSmallScreen && (
          <>
            <StyledTop />
            <StyledBottom />
          </>
        )}
        <IntroductionContent />
      </>
    </IntroWrapper>
  );
};

export default Introduction;
