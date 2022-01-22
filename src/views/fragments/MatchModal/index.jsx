import { useState } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  MatchModalWrapper,
  StyledTop,
  StyledDesktopTop,
  StyledConfetti,
  StyledDesktopBottom,
  QuestionNumber,
  ModalHeader,
  ModalContent,
  AvatarWrapper,
  StyledAvatar,
  StyledButton,
} from "./styled.components";
import Navbar from "../../fragments/Navbar";
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
  const { isSmallScreen } = useScreenSize();
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
        {isSmallScreen ? (
          <StyledTop />
        ) : (
          <>
            <Navbar>
              <StyledDesktopTop />
            </Navbar>
            <StyledConfetti />
            <StyledDesktopBottom />
          </>
        )}
        <QuestionNumber isSmallScreen={isSmallScreen}>
          Question {questionNumber}/5
        </QuestionNumber>
        <ModalHeader isAnswersMatch={isAnswersMatch}>
          {isAnswersMatch
            ? "Answers matched!"
            : "Looks like you two don't agree"}
        </ModalHeader>
        <ModalContent isSmallScreen={isSmallScreen}>
          {isAnswersMatch
            ? "Amazing! Your choices are the same!"
            : "It's the perfect time to have a chat!"}
        </ModalContent>
        <AvatarWrapper>
          <StyledAvatar src={childAvatar} isSmallScreen={isSmallScreen} />
          <StyledAvatar src={parentAvatar} isSmallScreen={isSmallScreen} />
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
