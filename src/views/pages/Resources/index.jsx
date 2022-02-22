import { useScreenSize } from "../../../hooks/useScreenSize";

import { ResourceWrapper, StyledTop } from "./styled.components";
import HomeNavbar from "../../fragments/HomeNavbar";
import ResourceContent from "../../fragments/ResourceContent";

const Resources = () => {
  const { isSmallScreen } = useScreenSize();
  return (
    <ResourceWrapper>
      {!isSmallScreen && (
        <>
          <HomeNavbar />
          <ResourceContent />
        </>
      )}
      {isSmallScreen && (
        <>
          <StyledTop />
          <ResourceContent />
        </>
      )}
    </ResourceWrapper>
  );
};

export default Resources;
