import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  StyledBackButton,
  StartContentWrapper,
  WelcomeMessage,
  Choose,
  Input,
  ChooseAvatar,
} from "./styled.components";

const { HOME, AVATAR_SELECTION } = ROUTE_NAMES;

const StartContent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [step, setStep] = useState(state?.step ?? 0);
  const [username, setUsername] = useState("");
  const [isParent, setIsParent] = useState(false);
  const usernames = state?.usernames ?? [];

  const handleBack = () => {
    if (step < 1) {
      navigate(HOME, { replace: true });
    } else {
      navigate(AVATAR_SELECTION, { state: { usernames } });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    usernames[step] = username;
    setUsername("");
    if (step < 1) {
      setStep((step) => step + 1);
      navigate(AVATAR_SELECTION, { state: { usernames } });
    } else {
      navigate(AVATAR_SELECTION, { state: { usernames, step } });
    }
  };

  useEffect(() => {
    setIsParent(step === 1);
  }, [step]);

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <StartContentWrapper>
        <WelcomeMessage>
          {isParent ? "Dear parent," : "Hi, little one!"}
        </WelcomeMessage>
        <Choose isParent={isParent}>Choose your avatar!</Choose>
        <Input
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />
        <ChooseAvatar isParent={isParent} onClick={handleSubmit}>
          Choose Avatar
        </ChooseAvatar>
      </StartContentWrapper>
    </>
  );
};

export default StartContent;
