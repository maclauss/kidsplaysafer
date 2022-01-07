import { useScreenSize } from "../../../hooks/useScreenSize";

import { StartWrapper, StyledBanner } from "./styled.components";
import StartContent from "../../fragments/StartContent";

const Start = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <StartWrapper>
      {isSmallScreen && (
        <>
          <StyledBanner />
          <StartContent />
        </>
      )}
    </StartWrapper>
  );
};

export default Start;
