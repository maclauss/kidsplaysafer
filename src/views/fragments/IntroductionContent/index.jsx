import { useNavigate, useLocation } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";
import AVATARS from "../../../constants/avatars";

import {
  StyledBackButton,
  IntroductionContentWrapper,
  Intro,
  AvatarImage,
  ParagraphContainer,
  ParagraphHeader,
  Paragraph,
  StyledNextButton,
  ImageWrapper,
} from "./styled.components";

const { AVATAR_SELECTION, QUESTIONS } = ROUTE_NAMES;

const IntroductionContent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const usernames = state.usernames,
    [childUsername, parentUsername] = usernames;
  const selections = state.selections,
    { child: childAvatar, parent: parentAvatar } = selections;

  const handleBack = () => {
    navigate(AVATAR_SELECTION, { state: { usernames }, replace: true });
  };

  const handleNext = () => {
    navigate(QUESTIONS, { state: { usernames, selections } });
  };

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <IntroductionContentWrapper>
        <ImageWrapper>
          <AvatarImage
            src={AVATARS.children[childAvatar]}
            alt="child's avatar"
          />
          <AvatarImage
            src={AVATARS.parents[parentAvatar]}
            alt="parent's avatar"
          />
        </ImageWrapper>
        <Intro>Introduction</Intro>
        <ParagraphContainer>
          <ParagraphHeader>
            Hello {childUsername ? childUsername : "Child"} and{" "}
            {parentUsername ? parentUsername : "Mummy/Daddy"},
          </ParagraphHeader>
          <Paragraph>
            Are you and your Mummy/Daddy ready? Are you ready to play?
          </Paragraph>
          <Paragraph>Let's answer some online safety questions!</Paragraph>
        </ParagraphContainer>
      </IntroductionContentWrapper>
      <StyledNextButton onClick={handleNext} />
    </>
  );
};
export default IntroductionContent;
