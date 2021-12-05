import styled from "styled-components";
import dots from "../../assets/images/dots.png";

export const StudioBody = styled.div`
  padding-top: 150px;
  padding-bottom: 90px;
  background-color: #fcfcfc;

  @media (max-width: 450px) {
    padding-top: 130px;
  }
`;

export const StudioBlock = styled.div``;

StudioBlock.Title = styled.h1`
  z-index: 1;
  font-size: 36px;
  font-weight: bold;
  line-height: 58px;
  font-style: normal;
  position: relative;
  margin-bottom: 35px;
  color: var(--navbarBg-Color);
  font-family: "Montserrat", sans-serif;

  ::after {
    display: block;
    content: "";
    width: 105px;
    height: 241px;
    background-image: url(${dots});
    position: absolute;
    top: -15px;
    left: -45px;
  }

  @media (max-width: 450px) {
    font-size: 27px;
  }
`;

StudioBlock.Body = styled.div`
  padding: 40px 30px 30px;
  background: #ffffff;
  z-index: 1;
  position: relative;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 0.32fr 0.68fr;
  grid-gap: 30px;

  @media (max-width: 1212px) {
    grid-template-columns: 1fr;
  }
`;

StudioBlock.BodyLeft = styled.div`
  position: relative;
`;
StudioBlock.BodyLeftItem = styled.div`
  /* position: absolute; */
  position: relative;
  width: 100%;
  height: 460px;

  @media (max-width: 450px) {
    display: none;
  }
`;

StudioBlock.BodyLeftImgOne = styled.img`
  position: absolute;
  bottom: 60px;
  right: 90px;
  z-index: 1;
  @media (max-width: 1212px) and (min-width: 620px) {
    display: none;
  }
`;
StudioBlock.BodyLeftImgTwo = styled.img`
  position: absolute;
  top: 30px;
  right: 0;
  @media (max-width: 1212px) and (min-width: 620px) {
    width: 100%;
    height: 400px;
  }
`;
StudioBlock.BodyLeftImgThree = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
  @media (max-width: 1212px) and (min-width: 620px) {
    display: none;
  }
`;

StudioBlock.BodyRight = styled.div``;

export const StudioText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #3a3a3a;
  margin-bottom: 25px;

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const Span = styled.span`
  font-size: 17px;
  line-height: 25px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: ${(props) => (props.orr ? "#FB6E01" : "#3a3a3a")};
  margin-right: ${(props) => props.mr && "30px"};

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

StudioBlock.Play = styled.div`
  position: relative;
`;

export const PlayWrap = styled.div``;
