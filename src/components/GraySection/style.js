import styled from "styled-components";
import Play from "../../assets/icons/play-button.svg";

export const GreySectionMain = styled.div`
  padding: 35px 0;
  margin-bottom: 100px;
  position: relative;

  ::before {
    content: "";
    width: 80%;
    height: 100%;
    background-color: ${({ wt }) => (wt ? "#fff" : "#f3f3f3")};
    position: absolute;
    top: 0;
    left: ${({ wt }) => !wt && "0"};
    right: ${({ wt }) => wt && "0"};
    z-index: -1;
    box-shadow: ${({ wt }) => wt && "0px 4px 15px rgba(0, 0, 0, 0.2)"};

    @media (max-width: 992px) {
      content: none;
    }
  }
  @media (max-width: 450px) {
    padding-top: 0;
  }
`;

GreySectionMain.Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ wt }) => wt && "row-reverse"};

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;
GreySectionMain.BodyLeft = styled.div`
  margin-right: ${({ wt }) => (!wt ? "75px" : "0")};
  margin-left: ${({ wt }) => wt && "30px"};
  width: 66.6666%;

  @media (max-width: 992px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;
GreySectionMain.BodyRight = styled.div`
  width: 33.33333%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: ${({ bt }) => (bt ? "25px" : "20px")};
  color: var(--main-color);

  @media (max-width: 992px) {
    margin-top: 30px;
  }
`;
export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #3a3a3a;
  margin-bottom: 18px;

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;
export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  color: var(--main-color);
  margin-right: 4px;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const Li = styled.li`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  display: flex;
  align-items: flex-start;
  color: #3a3a3a;
  width: 33%;
  flex: 0 0 33%;
  max-width: 33%;
  padding-right: 15px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
  @media (max-width: 580px) {
    width: 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const PlayImgWrap = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  ::before {
    content: "";
    width: 70px;
    height: 70px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(${Play});
    transform: translate(-50%, -50%);
  }
`;
export const PlayImg = styled.img`
  width: 100%;
`;
