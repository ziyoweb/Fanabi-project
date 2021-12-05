import React from "react";
import { ContactData } from "../../../mock";
import {
  ContactSocialsWrap,
  ContactInformation,
  ContactItem,
  ContactTitle,
  ContactText,
  ContactSocialIcons,
  ContactSocialLink,
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
        <ContactSocialLink href="https://www.facebook.com/muhriddin.ziyodulloyev.5">
          <ContactSocialIcons.Facebook />
        </ContactSocialLink>
        <ContactSocialLink href="https://www.instagram.com/ziyodulloyevmuhriddin/">
          <ContactSocialIcons.Instagram />
        </ContactSocialLink>
        <ContactSocialLink>
          <ContactSocialIcons.Twitter />
        </ContactSocialLink>
      </ContactSocialIcons>
    </ContactSocialsWrap>
  );
};

export default ContactSocials;
