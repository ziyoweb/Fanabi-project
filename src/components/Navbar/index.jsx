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
  activeStyle,
} from "./style";
import LogoBrand from "../../assets/images/logo.png";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [change, setChange] = useState(false);
  const [lang, setLang] = useState(false);

  const [langText, setLangText] = useState("Ру");

  const onToggle = () => {
    setChange(!change);
  };

  const changeOne = () => {
    setLangText("Ру");
  };

  const changeTwo = () => {
    setLangText("En");
  };
  return (
    <Nav navStyle>
      <Sidebar change={change} onToggle={onToggle} />

      <div className="container">
        <Wrapper>
          <Logo to="/">
            <LogoImg src={LogoBrand} />
          </Logo>

          <Links>
            <Navitem activeStyle={activeStyle} to="/наши-работы">
              Наши работы
            </Navitem>
            <Navitem activeStyle={activeStyle} to="/услуги_и_цены">
              Услуги и цены
            </Navitem>
            <Navitem activeStyle={activeStyle} to="/о_студии">
              О студии
            </Navitem>
            <Navitem activeStyle={activeStyle} to="/контакты">
              Контакты
            </Navitem>
          </Links>

          <Socials>
            <Socials.Link href="https://www.facebook.com/muhriddin.ziyodulloyev.5">
              <Socials.Icon1 />
            </Socials.Link>
            <Socials.Link href="https://www.instagram.com/ziyodulloyevmuhriddin/">
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
            <Language
              onClick={() => {
                {
                  setLang(!lang);
                  changeOne();
                }
              }}
            >
              <Language.Text>{langText}</Language.Text>
              <Language.Icon />
            </Language>

            {lang && (
              <Language.Other>
                <Language
                  onClick={() => {
                    {
                      setLang(!lang);
                      changeTwo();
                    }
                  }}
                >
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
