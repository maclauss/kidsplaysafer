import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import { NavbarWrapper, Link } from "./styled.components";

const { HOME, ABOUT, CONTACT, RESOURCES } = ROUTE_NAMES;

const Navbar = ({ children }) => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate(HOME);
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
    { name: "Home", onClick: onHomeClick },
    { name: "About", onClick: onAboutClick },
    { name: "Contact", onClick: onContactClick },
    { name: "Resources", onClick: onResourcesClick },
  ];

  return (
    <NavbarWrapper>
      {links.slice(0, 2).map((link, index) => {
        return (
          <Link onClick={link.onClick} key={`${link.name}-${index}`}>
            {link.name}
          </Link>
        );
      })}
      {children}
      {links.slice(2).map((link, index) => {
        return (
          <Link onClick={link.onClick} key={`${link.name}-${index}`}>
            {link.name}
          </Link>
        );
      })}
    </NavbarWrapper>
  );
};

export default Navbar;
