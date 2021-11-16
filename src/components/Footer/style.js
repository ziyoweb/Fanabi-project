import styled from "styled-components";

export const FooterWrap = styled.div`
  padding: 19px 0;
  background-color: var(--navbarBg-color);
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 667px) {
    flex-direction: column;
  }
`;

FooterContent.Title = styled.h4`
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 364px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #9d9d9d;
  margin-left: 6px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 364px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;
