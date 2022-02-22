import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  StyledBackButton,
  StyledTop,
  StyledBottom,
  StyledDesktopBottom,
  ReviewModalWrapper,
  QuestionNumber,
  Question,
  AvatarWrapper,
  StyledAvatar,
  ModalContent,
  ChoiceWrapper,
  Choice,
  Blank,
  StyledBackButton2,
  StyledBackButtonSideText,
} from "./styled.components";
import Navbar from "../Navbar";

const ReviewModal = ({
  avatars,
  question,
  questionNumber,
  answers,
  choices,
  handleBack,
}) => {
  const { isSmallScreen } = useScreenSize();
  const { childAvatar, parentAvatar } = avatars;
  const { childAnswer, parentAnswer } = answers;

  return (
    <ReviewModalWrapper>
      <StyledBackButton onClick={handleBack} />
      {isSmallScreen ? (
        <StyledTop isSmallScreen={isSmallScreen} />
      ) : (
        <Navbar style={{ zIndex: "10" }}>
          <StyledTop />
        </Navbar>
      )}
      {isSmallScreen ? <StyledBottom /> : <StyledDesktopBottom />}
      <QuestionNumber isSmallScreen={isSmallScreen}>
        Question {questionNumber}/5
      </QuestionNumber>
      <Question isSmallScreen={isSmallScreen}>{question}</Question>
      <AvatarWrapper isSmallScreen={isSmallScreen}>
        <StyledAvatar isSmallScreen={isSmallScreen} src={childAvatar} />
        <StyledAvatar isSmallScreen={isSmallScreen} src={parentAvatar} />
      </AvatarWrapper>
      <ModalContent>
        {choices.map((choice, i) => {
          return (
            <ChoiceWrapper key={`choice-${i}`}>
              {childAnswer === choice ? (
                <StyledAvatar src={childAvatar} />
              ) : (
                <Blank />
              )}
              <Choice isSmallScreen={isSmallScreen}>{`(${
                ["A", "B", "C", "D"][i]
              }) ${choice}`}</Choice>
              {parentAnswer === choice ? (
                <StyledAvatar isParent={true} src={parentAvatar} />
              ) : (
                <Blank />
              )}
            </ChoiceWrapper>
          );
        })}
      </ModalContent>
      {isSmallScreen ? (
        ""
      ) : (
        <>
          <StyledBackButton2 onClick={handleBack}></StyledBackButton2>
          <StyledBackButtonSideText>Back</StyledBackButtonSideText>
        </>
      )}
    </ReviewModalWrapper>
  );
};

export default ReviewModal;
