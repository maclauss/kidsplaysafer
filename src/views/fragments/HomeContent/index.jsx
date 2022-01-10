import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  HomeContentWrapper,
  Welcome,
  StartButton,
  LinksWrapper,
  Link,
} from "./styled.components";

const { START, ABOUT, CONTACT, RESOURCES } = ROUTE_NAMES;

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
  const onResourcesClick = () => {
    navigate(RESOURCES);
  };

  const links = [
    { name: "About", onClick: onAboutClick },
    { name: "Contact", onClick: onContactClick },
    { name: "Resources", onClick: onResourcesClick },
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
