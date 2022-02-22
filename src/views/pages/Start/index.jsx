import { useScreenSize } from "../../../hooks/useScreenSize";

import { StartWrapper, StyledBanner } from "./styled.components";
import StartContent from "../../fragments/StartContent";

const Start = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <StartWrapper>
      <>
        <StyledBanner isSmallScreen={isSmallScreen} />
        <StartContent />
      </>
    </StartWrapper>
  );
};

export default Start;
