import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";
import {
  HomeContentWrapper,
  Welcome,
  StartButton,
  LinksWrapper,
  Link,
} from "./styled.components";
const { START, ABOUT, CONTACT, SETTINGS } = ROUTE_NAMES;

const HomeContent = () => {
  const navigate = useNavigate();

  const onStartClick = () => {
    navigate(START);
  };
  const onAboutClick = () => {
    navigate(ABOUT);
  };
  const onContactClick = () => {
    navigate(CONTACT);
  };
  const onSettingsClick = () => {
    navigate(SETTINGS);
  };

  const links = [
    { name: "About", onClick: onAboutClick },
    { name: "Contact", onClick: onContactClick },
    { name: "Settings", onClick: onSettingsClick },
  ];

  return (
    <HomeContentWrapper>
      <Welcome>Welcome!</Welcome>
      <StartButton onClick={onStartClick}>Start</StartButton>
      <LinksWrapper>
        {links.map((link, index) => {
          return (
            <Link onClick={link.onClick} key={`${link.name}-${index}`}>
              {link.name}
            </Link>
          );
        })}
      </LinksWrapper>
    </HomeContentWrapper>
  );
};

export default HomeContent;
