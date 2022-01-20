import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AVATARS from "../../../constants/avatars";
import ROUTE_NAMES from "../../../constants/routeNames";

import {
  StyledBackButton,
  AvatarSelectionContentWrapper,
  StyledCarousel,
  WelcomeMessage,
  Choose,
  ChooseAvatar,
} from "./styled.components";

const { START, INTRODUCTION } = ROUTE_NAMES;

const selections = { parent: 0, child: 0 };

const AvatarSelectionContent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [step, setStep] = useState(state?.step ?? 0);
  const [isParent, setIsParent] = useState(false);
  const [selection, setSelection] = useState(0);
  const usernames = state.usernames;

  const handleBack = () => {
    if (step < 1) {
      navigate(START, { state: { usernames, step: 0 }, replace: true });
    } else {
      navigate(START, { state: { usernames, step: 1 }, replace: true });
    }
  };

  const handleSubmit = () => {
    if (step < 1) {
      selections.child = selection;
      setSelection(0);
      setStep((step) => step + 1);
      navigate(START, { state: { usernames, selections, step: 1 } });
    } else {
      selections.parent = selection;
      navigate(INTRODUCTION, { state: { usernames, selections } });
    }
  };

  useEffect(() => {
    setIsParent(step === 1);
  }, [step]);

  const carouselProps = {
    centerMode: true,
    centerSlidePercentage: 60,
    infiniteLoop: true,
    onChange: (i) => {
      setSelection(i);
    },
    selectedItem: selection,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
  };

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <AvatarSelectionContentWrapper>
        <StyledCarousel {...carouselProps}>
          {isParent
            ? AVATARS.parents.map((parent, i) => {
                return (
                  <div key={`parent-${i + 1}`}>
                    <img src={parent} alt={`parent-${i + 1}`} />
                  </div>
                );
              })
            : AVATARS.children.map((child, i) => {
                return (
                  <div key={`child-${i + 1}`}>
                    <img src={child} alt={`child-${i + 1}`} />
                  </div>
                );
              })}
        </StyledCarousel>
        <WelcomeMessage>
          {isParent ? "Dear parent," : "Hi, little one!"}
        </WelcomeMessage>
        <Choose isParent={isParent}>Choose your avatar!</Choose>
        <ChooseAvatar isParent={isParent} onClick={handleSubmit}>
          Select
        </ChooseAvatar>
      </AvatarSelectionContentWrapper>
    </>
  );
};

export default AvatarSelectionContent;
