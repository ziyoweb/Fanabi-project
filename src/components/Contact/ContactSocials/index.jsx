import React from "react";
import { ContactData } from "../../../mock";
import {
  ContactSocialsWrap,
  ContactInformation,
  ContactItem,
  ContactTitle,
  ContactText,
  ContactSocialIcons,
} from "./style";

const ContactSocials = () => {
  return (
    <ContactSocialsWrap>
      <ContactInformation>
        {ContactData.map((value) => {
          return (
            <ContactItem key={value.id}>
              <ContactTitle>{value.title}</ContactTitle>
              <ContactText>{value.text}</ContactText>
            </ContactItem>
          );
        })}
      </ContactInformation>
      <ContactSocialIcons>
        <ContactSocialIcons.Facebook />
        <ContactSocialIcons.Instagram />
        <ContactSocialIcons.Twitter />
      </ContactSocialIcons>
    </ContactSocialsWrap>
  );
};

export default ContactSocials;
