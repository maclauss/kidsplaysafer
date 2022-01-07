import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";

import {
  StyledBackButton,
  StartContentWrapper,
  WelcomeMessage,
  Choose,
  Input,
  ChooseAvatar,
} from "./styled.components";

const { AVATAR_SELECTION } = ROUTE_NAMES;

const usernames = [];

const StartContent = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [isParent, setIsParent] = useState(false);

  const handleBack = () => {
    if (step < 1) {
      navigate("/", { replace: true });
    } else {
      setStep(step - 1);
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
    } else {
      navigate(AVATAR_SELECTION, { state: { usernames } });
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
