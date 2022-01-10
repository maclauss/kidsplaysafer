import {
  StyledBackButton,
  StyledTop,
  StyledBottom,
  ReviewModalWrapper,
  QuestionNumber,
  Question,
  AvatarWrapper,
  StyledAvatar,
  ModalContent,
  ChoiceWrapper,
  Choice,
  Blank,
} from "./styled.components";

const ReviewModal = ({
  avatars,
  question,
  questionNumber,
  answers,
  choices,
  handleBack,
}) => {
  const { childAvatar, parentAvatar } = avatars;
  const { childAnswer, parentAnswer } = answers;

  return (
    <ReviewModalWrapper>
      <StyledBackButton onClick={handleBack} />
      <StyledTop />
      <StyledBottom />
      <QuestionNumber>Question {questionNumber}/5</QuestionNumber>
      <Question>{question}</Question>
      <AvatarWrapper>
        <StyledAvatar src={childAvatar} />
        <StyledAvatar src={parentAvatar} />
      </AvatarWrapper>
      <ModalContent>
        {choices.map((choice, i) => {
          return (
            <ChoiceWrapper>
              {childAnswer === choice ? (
                <StyledAvatar src={childAvatar} />
              ) : (
                <Blank />
              )}
              <Choice key={`choice-${i}`}>
                {`(${["A", "B", "C", "D"][i]}) ${choice}`}
              </Choice>
              {parentAnswer === choice ? (
                <StyledAvatar isParent={true} src={parentAvatar} />
              ) : (
                <Blank />
              )}
            </ChoiceWrapper>
          );
        })}
      </ModalContent>
    </ReviewModalWrapper>
  );
};

export default ReviewModal;
