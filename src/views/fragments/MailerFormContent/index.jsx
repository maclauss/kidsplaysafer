import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  MailerFormContentWrapper,
  Thanks,
  SignUp,
  Input,
  Submit,
  Skip,
} from "./styled.components";

const { HOME } = ROUTE_NAMES;

const MailerFormContent = () => {
  const navigate = useNavigate();
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
    navigate(HOME);
  };

  return (
    <MailerFormContentWrapper>
      <Thanks>Thanks for playing! Well Done!</Thanks>
      <SignUp>
        Sign up here if you want to receive alerts and be part of the community
        to build this tool.
      </SignUp>
      <Input
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <Input
        name="email"
        placeholder="Email address"
        value={email}
        onChange={handleChange}
      />
      <Submit>Submit</Submit>
      <Skip onClick={handleClick}>Skip</Skip>
    </MailerFormContentWrapper>
  );
};

export default MailerFormContent;
