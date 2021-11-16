import styled from "styled-components";
import { ReactComponent as NextArr } from "../../assets/icons/nextBg.svg";

export const OrderMediaTitle = styled.a`
  text-decoration: none;
  font-family: "Monserrat", sans-serif;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 128%;
  color: #615f5f;
  position: relative;
  margin-bottom: 120px;

  ::before {
    content: "";
    width: 30px;
    height: 50px;
    display: block;
    position: absolute;
    left: 0;
    z-index: -1;
    background-color: #fdefe7;
  }

  @media (max-width: 667px) {
    margin-bottom: 45px;
  }
`;
OrderMediaTitle.Icon = styled(NextArr)`
  margin-left: 15px;
`;
