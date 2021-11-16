import React from "react";
import { FooterWrap, FooterContent, FooterRight, Span } from "./style";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="container">
        <FooterContent>
          <FooterContent.Title>
            © 2020 Fanabi. Все права защищены
          </FooterContent.Title>
          <FooterRight>
            <FooterContent.Title>Разработка сайта:</FooterContent.Title>
            <Span>Мухриддин</Span>
          </FooterRight>
        </FooterContent>
      </div>
    </FooterWrap>
  );
};

export default Footer;
