import styled, { css } from "styled-components";
import Design from "../../assets/images/design.png";
import { ReactComponent as Sms } from "../../assets/icons/sms2.svg";
import { ReactComponent as Plan } from "../../assets/icons/plan.svg";
import { ReactComponent as Sircle } from "../../assets/icons/circle.svg";
import Dots from "../../assets/images/dots.png";

export const CarouselSection = styled.div`
  margin-bottom: 50px;
`;

export const CarouselHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 90px;
  margin-bottom: 30px;

  @media (max-width: 564px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 55px;
  }
`;

CarouselHeader.Btn = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 170px;
  text-align: center;
  border-radius: 200px;
  color: var(--main-color);
  padding: 7px 0;
  cursor: pointer;
  border: 1px solid var(--main-color);

  @media (max-width: 564px) {
    width: 100%;
    line-height: 18px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 58px;
  position: relative;

  ::before {
    content: "";
    width: 80px;
    height: 200px;
    display: block;
    background-color: #fdefe7;
    position: absolute;
    z-index: -1;
    left: 0;
  }

  ::after {
    content: "";
    position: absolute;
    background-image: url(${Dots});
    width: 105px;
    height: 240px;
    left: -55px;
    top: -26px;
    z-index: -1;
  }

  @media (max-width: 620px) {
    font-size: 28px;
  }

  @media (max-width: 564px) {
    font-size: 24px;
    text-align: left;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 0.32fr 0.68fr;
  width: 100%;
  position: relative;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemLeft = styled.div`
  background-image: url("${Design}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  padding-top: 30px;

  @media (max-width: 950px) {
    height: 300px;
  }
  @media (max-width: 360px) {
    height: 220px;
  }
`;

ItemLeft.Button = styled.button`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  width: 235px;
  text-align: center;
  padding: 12px 0;
  border-style: none;
  outline: none;
  cursor: pointer;
  display: block;
  margin: 0 30px 0 auto;
  opacity: 0.7;
`;
export const ItemRight = styled.div`
  background-color: var(--grey-color);
  padding: 66px 110px 0 40px;

  @media (max-width: 500px) {
    padding: 30px 20px 0 20px;
  }
`;

const common = css`
  display: block;
  margin-bottom: -20px;
`;

ItemRight.Icon1 = styled(Sms)`
  ${common}
`;
ItemRight.Icon2 = styled(Plan)`
  ${common}
`;
ItemRight.Icon3 = styled(Sircle)`
  margin-top: 9px;
  margin-right: 12px;
`;

ItemRight.Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #1d1b1b;
  font-size: 18px;
  line-height: 25px;
  position: relative;
  margin-bottom: 5px;
`;

ItemRight.Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: var(--text-color);
  display: ${({ df }) => df && "flex"};
  margin-bottom: ${({ df }) => (df ? "10px" : "30px")};

  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;

ItemRight.IconWrap = styled.div`
  width: 20px;
`;

ItemRight.IconCircle = styled.div`
  width: 7px;
  height: 7px;
  border: 1px solid var(--main-color);
  margin-top: 9px;
  display: block;
  margin-right: 12px;
  border-radius: 50%;
`;
