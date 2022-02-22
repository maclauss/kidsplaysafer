import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  QuestionsWrapper,
  StyledDesktopTop,
  StyledDesktopBottom,
  StyledTop,
  StyledBottom,
} from "./styled.components";
import Navbar from "../../fragments/Navbar";
import QuestionsContent from "../../fragments/QuestionsContent";

const Questions = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <QuestionsWrapper isSmallScreen={isSmallScreen}	>
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
        <QuestionsContent />
      </>
    </QuestionsWrapper>
  );
};

export default Questions;
