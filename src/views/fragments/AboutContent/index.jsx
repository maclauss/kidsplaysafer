import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  StyledBackButton,
  AboutContentWrapper,
  About,
  Paragraph,
  ParagraphContainer,
} from "./styled.components";

const { HOME } = ROUTE_NAMES;

const AboutContent = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(HOME);
  };

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <AboutContentWrapper>
        <About>About</About>
        <ParagraphContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci
            nulla, blandit sit amet lorem sed, fermentum mollis metus. Nunc in
            blandit massa. Maecenas semper urna eros, sit amet lacinia metus
            porta ac. Sed mi nisl, maximus eget elementum in, faucibus nec
            velit. Aliquam blandit justo ac finibus iaculis.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci
            nulla, blandit sit amet lorem sed, fermentum mollis metus. Nunc in
            blandit massa. Maecenas semper urna eros, sit amet lacinia metus
            porta ac. Sed mi nisl, maximus eget elementum in, faucibus nec
            velit. Aliquam blandit justo ac finibus iaculis.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci
            nulla, blandit sit amet lorem sed, fermentum mollis metus. Nunc in
            blandit massa. Maecenas semper urna eros, sit amet lacinia metus
            porta ac. Sed mi nisl, maximus eget elementum in, faucibus nec
            velit. Aliquam blandit justo ac finibus iaculis.
          </Paragraph>
        </ParagraphContainer>
      </AboutContentWrapper>
    </>
  );
};

export default AboutContent;
