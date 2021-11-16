import styled from "styled-components";
import dots from "../../assets/images/dots.png";

export const StudioBody = styled.div`
  padding-top: 80px;
  padding-bottom: 90px;
  background-color: #fcfcfc;
`;

export const StudioBlock = styled.div``;

StudioBlock.Title = styled.h1`
  position: relative;
  z-index: 1;
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
`;
