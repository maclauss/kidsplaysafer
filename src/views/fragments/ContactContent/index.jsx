import { useNavigate } from "react-router-dom";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  StyledBackButton,
  ContactContentWrapper,
  Contact,
  ContactDetail,
  StyledEmail,
  StyledWeb,
  Description,
} from "./styled.components";

const { HOME } = ROUTE_NAMES;

const contactDetails = [
  { svg: <StyledEmail />, description: "kidsplaysafest@gmail.com" },
  { svg: <StyledWeb />, description: "kidsplaysafer.sg" },
];

const ContactContent = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(HOME);
  };

  return (
    <>
      <StyledBackButton onClick={handleBack} />
      <ContactContentWrapper>
        <Contact>Contact us</Contact>
        {contactDetails.map((contact, i) => {
          return (
            <ContactDetail key={`contact-${i + 1}`}>
              {contact.svg}
              <Description>{contact.description}</Description>
            </ContactDetail>
          );
        })}
      </ContactContentWrapper>
    </>
  );
};

export default ContactContent;
