import { useScreenSize } from "../../../hooks/useScreenSize";

import { AvatarSelectionWrapper } from "./styled.components";
import AvatarSelectionContent from "../../fragments/AvatarSelectionContent";

const AvatarSelection = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <>
      <AvatarSelectionWrapper>
        {isSmallScreen && <AvatarSelectionContent />}
      </AvatarSelectionWrapper>
    </>
  );
};

export default AvatarSelection;
