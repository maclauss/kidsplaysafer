import { useScreenSize } from "../../../hooks/useScreenSize";

import { StyledTop, StyledBottom, QuestionsWrapper } from "./styled.components";
import QuestionsContent from "../../fragments/QuestionsContent";

const Questions = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <QuestionsWrapper>
      {isSmallScreen && (
        <>
          <StyledTop />
          <StyledBottom />
          <QuestionsContent />
        </>
      )}
    </QuestionsWrapper>
  );
};

export default Questions;
