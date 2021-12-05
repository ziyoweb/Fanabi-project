import styled from "styled-components";

export const OurWorkItemWrap = styled.div`
  margin-top: 150px;

  @media (max-width: 450px) {
    margin-top: 130px;
  }
`;

export const OurWorksItemImg = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

OurWorksItemImg.Img = styled.img`
  width: 100%;

  @media (max-width: 450px) {
    height: 230px;
  }
`;

OurWorkItemWrap.Body = styled.div`
  margin-bottom: 40px;
  padding: 30px 0 30px 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
`;

OurWorkItemWrap.BodyTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
  color: var(--navbarBg-color);
  line-height: 25px;
  font-family: "Montserrat", sans-serif;
`;
OurWorkItemWrap.BodyText = styled.p`
  font-size: 17px;
  line-height: 24px;
  font-weight: normal;
  margin-bottom: 35px;
  color: var(--navbarBg-color);
  font-family: "Montserrat", sans-serif;

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;
