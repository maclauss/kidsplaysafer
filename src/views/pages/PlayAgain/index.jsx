import { useScreenSize } from "../../../hooks/useScreenSize";

import Logo from "../../assets/icons/logo.png";

import {
  PlayAgainWrapper,
  StyledLogo,
  StyledTop,
  StyledBottom,
} from "./styled.components";
import PlayAgainContent from "../../fragments/PlayAgainContent";

const PlayAgain = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <PlayAgainWrapper>
      {!isSmallScreen && (
        <div
          style={{
            position: "absolute",
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
            fontSize: "60px",
            textAlign: "center",
          }}
        >
          <StyledLogo src={Logo} />
          <div>Desktop version coming soon!</div>
        </div>
      )}
      {isSmallScreen && (
        <>
          <StyledTop />
          <StyledBottom />
          <PlayAgainContent />
        </>
      )}
    </PlayAgainWrapper>
  );
};

export default PlayAgain;
