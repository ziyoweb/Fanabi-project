import styled from "styled-components";

export const Card = styled.div`
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

Card.Img = styled.img`
  width: 100%;
  height: 100%;
`;

Card.Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 4px;
  padding: 0 0 35px 30px;
  background-color: rgba(251, 110, 1, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s linear;

  ${Card}:hover & {
    opacity: 1;
  }
`;

Card.Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  margin-bottom: 12px;
  color: #ffffff;
`;

Card.Text = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
`;

export const Line = styled.div`
  width: 80px;
  background-color: #fff;
  height: 1px;
  margin-bottom: 12px;
`;
