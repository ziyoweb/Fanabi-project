import styled from "styled-components";

export const DescriptionWrap = styled.div`
  padding: 35px 0;
  margin-bottom: 50px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const DescriptionBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 58px;

  @media (max-width: 747px) {
    grid-template-columns: 1fr;
  }
`;

export const DescriptionItem = styled.div``;

DescriptionItem.Title = styled.h2`
  color: #fb6e01;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
DescriptionItem.Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #3a3a3a;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;
