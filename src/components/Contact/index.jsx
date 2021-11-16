import React from "react";
import { CarouselTitle } from "../CarouselBlock/style";
import ContactSocials from "./ContactSocials";
import ContactMap from "./ContactMap";
import { ContactWrap, ContactContent } from "./style";

const Contact = ({ title }) => {
  return (
    <ContactWrap>
      <div className="container">
        <CarouselTitle>{title}</CarouselTitle>
        <ContactContent>
          <ContactSocials />
          <ContactMap />
        </ContactContent>
      </div>
    </ContactWrap>
  );
};

export default Contact;
