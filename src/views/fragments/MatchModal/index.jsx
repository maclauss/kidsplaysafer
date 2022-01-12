import { useState } from "react";

import {
  MatchModalWrapper,
  StyledTop,
  QuestionNumber,
  ModalHeader,
  ModalContent,
  AvatarWrapper,
  StyledAvatar,
  StyledButton,
} from "./styled.components";
import ReviewModal from "../ReviewModal";

const MatchModal = ({
  avatars,
  handleClose,
  handleEnd,
  questionNumber,
  question,
  answers,
  choices,
}) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [childAvatar, parentAvatar] = avatars;

  const { child: childAnswer, parent: parentAnswer } = answers;
  const isAnswersMatch = childAnswer === parentAnswer;

  const handleReview = () => {
    setShowReviewModal(true);
  };

  const handleBack = () => {
    setShowReviewModal(false);
  };

  return (
    <>
      <MatchModalWrapper>
        <StyledTop />
        <QuestionNumber>Question {questionNumber}/5</QuestionNumber>
        <ModalHeader isAnswersMatch={isAnswersMatch}>
          {isAnswersMatch
            ? "Answers matched!"
            : "Looks like you two don't agree"}
        </ModalHeader>
        <ModalContent>
          {isAnswersMatch
            ? "Amazing! Your choices are the same!"
            : "It's the perfect time to have a chat!"}
        </ModalContent>
        <AvatarWrapper>
          <StyledAvatar src={childAvatar} />
          <StyledAvatar src={parentAvatar} />
        </AvatarWrapper>
        <StyledButton isReview={true} onClick={handleReview}>
          Review Answer
        </StyledButton>
        {questionNumber === 5 ? (
          <StyledButton isEndQuiz={true} onClick={handleEnd}>
            End Quiz
          </StyledButton>
        ) : (
          <StyledButton onClick={handleClose}>Next Question</StyledButton>
        )}
      </MatchModalWrapper>
      {showReviewModal && (
        <ReviewModal
          avatars={{ childAvatar, parentAvatar }}
          question={question}
          questionNumber={questionNumber}
          answers={{ childAnswer, parentAnswer }}
          choices={choices}
          handleBack={handleBack}
        />
      )}
    </>
  );
};

export default MatchModal;
