import styled from "styled-components";

export const MapWrap = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 840px) {
    height: 300px;
  }
`;

MapWrap.Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;
