import {
  ContactContentWrapper,
  Contact,
  ContactDetailsWrapper,
  ContactDetail,
  StyledEmail,
  StyledWeb,
  Description,
} from "./styled.components";

const contactDetails = [
  { svg: <StyledEmail />, description: "kidsplaysafer@gmail.com" },
  { svg: <StyledWeb />, description: "kidsplaysafer.sg" },
];

const ContactContent = () => {
  return (
    <>
      <ContactContentWrapper>
        <Contact>Contact us</Contact>
        <ContactDetailsWrapper>
          {contactDetails.map((contact, i) => {
            return (
              <ContactDetail key={`contact-${i + 1}`}>
                {contact.svg}
                <Description>{contact.description}</Description>
              </ContactDetail>
            );
          })}
        </ContactDetailsWrapper>
      </ContactContentWrapper>
    </>
  );
};

export default ContactContent;
