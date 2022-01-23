import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../../hooks/useScreenSize";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  MailerFormContentWrapper,
  Thanks,
  SignUp,
  Input,
  Submit,
  Skip,
} from "./styled.components";

const { PLAY_AGAIN } = ROUTE_NAMES;

const MailerFormContent = () => {
  const navigate = useNavigate();
  const { isSmallScreen } = useScreenSize();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    navigate(PLAY_AGAIN);
  };

  return (
    <MailerFormContentWrapper isSmallScreen={isSmallScreen}>
      <Thanks isSmallScreen={isSmallScreen}>
        Thanks for playing! Well Done!
      </Thanks>
      <SignUp isSmallScreen={isSmallScreen}>
        Sign up here if you want to receive alerts and be part of the community
        to build this tool.
      </SignUp>
      <Input
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        isSmallScreen={isSmallScreen}
      />
      <Input
        name="email"
        placeholder="Email address"
        value={email}
        onChange={handleChange}
        isSmallScreen={isSmallScreen}
      />
      <Submit isSmallScreen={isSmallScreen}>Submit</Submit>
      <Skip onClick={handleClick}>Skip</Skip>
    </MailerFormContentWrapper>
  );
};

export default MailerFormContent;
