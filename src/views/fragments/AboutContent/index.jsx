


import {
    HomeContentWrapper,
    About,
    Paragraph,
    ParagraphContainer,
  } from "./styled.components";

  const AboutContent = () => {

    return (
        <HomeContentWrapper>
          
          <About>About Us!</About>  
          <ParagraphContainer>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nulla, blandit sit amet lorem sed, fermentum mollis metus. Nunc in blandit massa. Maecenas semper urna eros, sit amet lacinia metus porta ac. Sed mi nisl, maximus eget elementum in, faucibus nec velit. Aliquam blandit justo ac finibus iaculis. </Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nulla, blandit sit amet lorem sed, fermentum mollis metus. Nunc in blandit massa. Maecenas semper urna eros, sit amet lacinia metus porta ac. Sed mi nisl, maximus eget elementum in, faucibus nec velit. Aliquam blandit justo ac finibus iaculis. </Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nulla, blandit sit amet lorem sed, fermentum mollis metus. Nunc in blandit massa. Maecenas semper urna eros, sit amet lacinia metus porta ac. Sed mi nisl, maximus eget elementum in, faucibus nec velit. Aliquam blandit justo ac finibus iaculis. </Paragraph>
          </ParagraphContainer>

        </HomeContentWrapper>
      );
    };
    
    export default AboutContent;