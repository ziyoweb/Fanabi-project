import styled, { keyframes } from "styled-components";
import headerBg from "../../assets/images/main-bg.jpg";
import { ReactComponent as Circlechecked } from "../../assets/icons/circle-checked.svg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import PlayerImg from "../../assets/images/slidervideo.jpg";

export const Wrapper = styled.div`
  width: 100%;
  padding: 236px 0 80px 0;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${headerBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 646px) {
    padding: 200px 0 80px 0;
  }
  @media (max-width: 454px) {
    padding: 150px 0 30px 0;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 935px) {
    flex-direction: column;
    justify-content: center;
  }
`;

HeaderItem.Left = styled.div`
  margin-right: 163px;
  @media (max-width: 935px) {
    margin-bottom: 35px;
    margin-right: 0;
  }
`;

HeaderItem.Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 44px;
  line-height: 58px;
  color: #fff;

  @media (max-width: 1090px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (max-width: 560px) {
    font-size: 26px;
    line-height: 28px;
  }
`;

HeaderItem.Span = styled.span`
  color: var(--main-color);
  display: block;
  margin-bottom: 40px;
`;

export const HeaderLeftItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

HeaderLeftItem.IconWrap = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

HeaderLeftItem.Icon = styled(Circlechecked)`
  height: 100%;
`;

HeaderLeftItem.Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: #fff;

  @media (max-width: 454px) {
    font-size: 16px;
  }
`;

HeaderItem.Right = styled.div`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

HeaderItem.RightIn = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  position: relative;
  background-image: url(${PlayerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: rgba(46, 42, 42, 0.6);
  }

  @media (max-width: 454px) {
    width: 270px;
    height: 270px;
  }
`;

export const HeaderRightImg = styled.img`
  border-radius: 50%;
  padding: 20px;
  border: 1px solid #3e3733;
  position: relative;
`;

const animate = keyframes`
  0% {
    box-shadow:0 0 0 0 rgba(255,109,74, .7), 0 0 0 0 rgba(255,109,74, .7)
  }
  40% {
    box-shadow:0 0 0 25px rgba(255,109,74, 0), 0 0 0 0 rgba(255,109,74, .7)
  }
  80% {
    box-shadow:0 0 0 25px rgba(255,109,74, 0), 0 0 0 25px rgba(255,109,74, 0)
  }
  100% {
    box-shadow:0 0 0 0 rgba(255,109,74, 0), 0 0 0 25px rgba(255,109,74, 0)
  }
`;

export const PlayBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.st ? "40px" : "50px")};
  height: ${(props) => (props.st ? "40px" : "50px")};
  background-color: var(--main-color);
  border-radius: 50%;
  animation: ${animate} 2.5s linear infinite;
  position: absolute;
  top: 50%;
  left: ${({ st }) => (st ? "60%" : "50%")};
  transform: translate(-50%, -50%);
  z-index: 1;
  :hover {
    cursor: pointer;
  }
`;

PlayBtn.Icon = styled(PlayIcon)``;
