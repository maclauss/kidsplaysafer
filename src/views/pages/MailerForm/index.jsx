import { useScreenSize } from "../../../hooks/useScreenSize";

import {
  MailerFormWrapper,
  StyledTop,
  StyledDesktopTop,
  StyledConfetti,
  DesktopBackground,
} from "./styled.components";
import MailerFormContent from "../../fragments/MailerFormContent";
import Navbar from "../../fragments/Navbar";

const MailerForm = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <MailerFormWrapper>
      {isSmallScreen ? (
        <StyledTop />
      ) : (
        <>
          <Navbar>
            <StyledDesktopTop />
          </Navbar>
          <StyledConfetti />
          <DesktopBackground />
        </>
      )}
      <MailerFormContent />
    </MailerFormWrapper>
  );
};

export default MailerForm;
