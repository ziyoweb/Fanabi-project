import styled from "styled-components";
import Dots from "../../assets/images/dots.png";

export const CardsSection = styled.div`
  margin-bottom: 62px;
`;

CardsSection.Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 58px;
  font-family: "Montserrat", sans-serif;
  color: var(--navbarBg-color);
  margin-bottom: 25px;
  position: relative;

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

export const CardsParent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 30px;
`;
