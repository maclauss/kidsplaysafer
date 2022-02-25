import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../../firebase";
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

const usersRef = collection(db, "users");
const answersRef = collection(db, "answers");

const MailerFormContent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isSmallScreen } = useScreenSize();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const answers = {};
  state.answers.forEach((answer, i) => {
    answers[`question${i + 1}`] = answer;
    console.log(answers);
  });

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

  const handleSubmit = async () => {
    const userRef = await addDoc(usersRef, {
      name,
      email,
    });
    addDoc(answersRef, {
      user: userRef.id,
      ...answers,
    });
    navigate(PLAY_AGAIN);
  };

  const handleClick = () => {
    addDoc(answersRef, answers);
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
      <Submit isSmallScreen={isSmallScreen} onClick={handleSubmit}>
        Submit
      </Submit>
      <Skip onClick={handleClick}>Skip</Skip>
    </MailerFormContentWrapper>
  );
};

export default MailerFormContent;
