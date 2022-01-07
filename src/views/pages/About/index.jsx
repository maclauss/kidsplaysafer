import { useScreenSize } from "../../../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";
import { HomeWrapper, StyledLogo, BackIconz } from "./styled.components";
import AboutContent from "../../fragments/AboutContent";
import BackIcon from "../../assets/icons/back-icon2.png";

const About = () => {
  const navigate = useNavigate(); 
  const onHomeClick = () => {
    navigate("/");
  };
  const { isSmallScreen } = useScreenSize();
  return (
    <HomeWrapper>
      {isSmallScreen && (
        <>
          <BackIconz src= {BackIcon} onClick = {onHomeClick} />
          <StyledLogo />     
          <AboutContent />
        </>
      )}
    </HomeWrapper>
  );
};

export default About;
