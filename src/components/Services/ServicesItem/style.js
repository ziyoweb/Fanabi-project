import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  padding: 25px;
  background: #ffffff;
  border: 4px solid #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.2s linear;
  overflow: hidden;
  cursor: pointer;

  :hover {
    border: 4px solid #ffe5d1;
  }
`;
Item.Header = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Item.IconWrap = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid #ffe5d1;
  background-color: var(--main-color);
`;

Item.Icon = styled.img``;

Item.Num = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 22px;
  color: #ffe1ca;
`;

Item.Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  color: #1d1b1b;
`;
