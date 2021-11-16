import React, { useState } from "react";
import {
  Nav,
  Navitem,
  Logo,
  Links,
  Socials,
  PhoneNum,
  Language,
  Wrapper,
  Burger,
  Languages,
  LogoImg,
} from "./style";
import LogoBrand from "../../assets/images/logo.png";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [change, setChange] = useState(false);
  const [lang, setLang] = useState(false);

  const langu = ["Ру", "En"];
  const [langText, setLangText] = useState(langu[0]);

  const onToggle = () => {
    setChange(!change);
  };

  const onLang = () => {
    setLang(!lang);
  };
  const changes = () => {
    setLangText(langu[1]);
  };
  return (
    <Nav>
      <Sidebar change={change} onToggle={onToggle} />

      <div className="container">
        <Wrapper>
          <Logo to="/">
            <LogoImg src={LogoBrand} />
          </Logo>

          <Links>
            <Navitem to="/наши-работы">Наши работы</Navitem>
            <Navitem to="/услуги_и_цены">Услуги и цены</Navitem>
            <Navitem to="/о_студии">О студии</Navitem>
            <Navitem to="/контакты">Контакты</Navitem>
          </Links>

          <Socials>
            <Socials.Link href="#">
              <Socials.Icon1 />
            </Socials.Link>
            <Socials.Link href="#">
              <Socials.Icon2 />
            </Socials.Link>
            <Socials.Link href="#">
              <Socials.Icon3 />
            </Socials.Link>
          </Socials>

          <PhoneNum href="tel:+998917713955">
            <PhoneNum.Icon />
            <PhoneNum.Text>+998917713955</PhoneNum.Text>
          </PhoneNum>

          <Languages>
            <Language onClick={onLang}>
              <Language.Text>{langText}</Language.Text>
              <Language.Icon />
            </Language>

            {lang && (
              <Language.Other onClick={[onLang, changes]}>
                <Language>
                  <Language.Text>En</Language.Text>
                </Language>
              </Language.Other>
            )}
          </Languages>
          <Burger onClick={onToggle} />
        </Wrapper>
      </div>
    </Nav>
  );
};

export default Navbar;
