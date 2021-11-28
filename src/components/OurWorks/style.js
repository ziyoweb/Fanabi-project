import styled from "styled-components";
import Dots from "../../assets/images/dots.png";

export const Wrapper = styled.div`
  margin: 80px 0;
`;

export const OurWorksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
`;

OurWorksHeader.Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 58px;
  position: relative;
  color: var(--navbarBg-color);

  ::before {
    content: "";
    display: block;
    width: 105px;
    height: 240px;
    position: absolute;
    left: -55px;
    top: -26px;
    z-index: -1;
    background-image: url(${Dots});
  }

  @media (max-width: 667px) {
    font-size: 32px;
  }

  @media (max-width: 520px) {
    font-size: 24px;
  }
`;

OurWorksHeader.Links = styled.div``;
OurWorksHeader.LinksUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;
OurWorksHeader.LinksLi = styled.li`
  :not(:first-child) {
    margin-left: 65px;
  }
`;
OurWorksHeader.LinksA = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #898989;
  word-wrap: none;
  text-decoration: none;
`;

export const OurWorksBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 676px) {
    grid-template-columns: 1fr;
  }
`;
