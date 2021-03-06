import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 150px;

  @media (max-width: 450px) {
    margin-top: 130px;
  }
`;

export const ContactWrap = styled.div`
  margin-bottom: 90px;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;
