import styled from "styled-components";

export const ServicesSection = styled.div`
  margin-top: 150px;
  margin-bottom: 80px;

  @media (max-width: 450px) {
    margin-top: 130px;
  }
`;

ServicesSection.Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 30px;
`;
