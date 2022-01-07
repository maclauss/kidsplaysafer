import { useScreenSize } from "../../../hooks/useScreenSize";

import { MailerFormWrapper, StyledTop } from "./styled.components";
import MailerFormContent from "../../fragments/MailerFormContent";

const MailerForm = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <MailerFormWrapper>
      {isSmallScreen && (
        <>
          <StyledTop />
          <MailerFormContent />
        </>
      )}
    </MailerFormWrapper>
  );
};

export default MailerForm;
