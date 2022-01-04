import { useNavigate } from "react-router-dom";

import {
  HomeContentWrapper,
  Welcome,
  StartButton,
  LinksWrapper,
  Link,
} from "./styled.components";

const HomeContent = () => {
  const navigate = useNavigate();

  const onAboutClick = () => {
    navigate("/about");
  };
  const onContactClick = () => {
    navigate("/contact");
  };
  const onSettingsClick = () => {
    navigate("/settings");
  };

  const links = [
    { name: "About", onClick: onAboutClick },
    { name: "Contact", onClick: onContactClick },
    { name: "Settings", onClick: onSettingsClick },
  ];

  return (
    <HomeContentWrapper>
      <Welcome>Welcome!</Welcome>
      <StartButton>Start</StartButton>
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
