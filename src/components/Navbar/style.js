import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter2.svg";
import { ReactComponent as phone } from "../../assets/icons/call2.svg";
import { ReactComponent as nextBg } from "../../assets/icons/bottom-arrow.svg";
import { HiOutlineMenu } from "react-icons/hi";

export const Nav = styled.div`
  width: 100%;
  background-color: var(--navbarBg-color);
  padding: 30px 0;
  position: relative;
`;

export const Navitem = styled(NavLink)`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-decoration: none;
  margin: 0 25px;
  transition: color 0.25s linear;

  :hover {
    color: var(--main-color);
  }

  @media (max-width: 1200px) {
    margin: 0 12px;
  }
  @media (max-width: 1056px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  cursor: pointer;
  width: 160px;
  height: 32px;
  text-decoration: none;
  display: block;

  @media (max-width: 480px) {
    width: 120px;
    height: 28px;
  }
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Links = styled.div``;

export const Socials = styled.div`
  @media (max-width: 667px) {
    display: none;
  }
`;

Socials.Link = styled.a`
  margin: 0 10px;
  transition: all 0.25s linear;
`;

const common = css`
  & path {
    fill: #545454;
  }
  :hover {
    & path {
      fill: var(--main-color);
    }
  }
`;

Socials.Icon1 = styled(facebook)`
  ${common}
`;
Socials.Icon2 = styled(instagram)`
  ${common}
`;
Socials.Icon3 = styled(twitter)`
  ${common}
  stroke: var(--main-color);
`;

export const PhoneNum = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

PhoneNum.Icon = styled(phone)`
  @media (max-width: 430px) {
    width: 18px;
    height: 18px;
  }
`;
PhoneNum.Text = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-left: 6px;
  transition: all 0.25s linear;

  ${PhoneNum}:hover & {
    color: var(--main-color);
  }

  @media (max-width: 430px) {
    font-size: 16px;
    margin-left: 0;
  }
`;

export const Languages = styled.div`
  position: relative;
`;

export const Language = styled.div`
  border: 1px solid var(--main-color);
  padding: 7px 11px;
  border-radius: 100px;

  :hover {
    cursor: pointer;
    background-color: var(--navbarBg-color);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

Language.Other = styled.div`
  position: absolute;
  top: 110%;
  width: 55.45px;
  text-align: center;
`;

Language.Icon = styled(nextBg)`
  margin-left: 4px;
`;
Language.Text = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--main-color);
`;

export const Burger = styled(HiOutlineMenu)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 1056px) {
    display: block;
  }
`;
