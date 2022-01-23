import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  PlayAgainWrapper,
  StyledTop,
  StyledBottom,
  StyledDesktopTop,
  StyledConfetti,
  DesktopBackground,
} from "./styled.components";
import Navbar from "../../fragments/Navbar";
import PlayAgainContent from "../../fragments/PlayAgainContent";

const PlayAgain = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <PlayAgainWrapper>
      {isSmallScreen ? (
        <>
          <StyledTop />
          <StyledBottom />
        </>
      ) : (
        <>
          <Navbar>
            <StyledDesktopTop />
          </Navbar>
          <StyledConfetti />
          <DesktopBackground />
        </>
      )}

      <PlayAgainContent />
    </PlayAgainWrapper>
  );
};

export default PlayAgain;
