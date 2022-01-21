import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import { HomeContentWrapper, Welcome, StartButton } from "./styled.components";

const { START } = ROUTE_NAMES;

const HomeDesktopContent = () => {
  const navigate = useNavigate();

  const onStartClick = () => {
    navigate(START);
  };

  return (
    <HomeContentWrapper>
      <Welcome>Welcome!</Welcome>
      <StartButton onClick={onStartClick}>Start</StartButton>
    </HomeContentWrapper>
  );
};

export default HomeDesktopContent;
