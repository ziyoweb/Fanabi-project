import styled from "styled-components";
import { ReactComponent as arrowRight } from "../../../assets/icons/arrowRight.svg";

export const Card = styled.div`
  padding: 25px 19px 24px 25px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s linear;
  border-radius: 2px;

  :hover {
    cursor: pointer;
    background-color: #111;
  }
`;

Card.Content = styled.div``;

Card.Description = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #898989;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

Card.Text = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #1d1b1b;
  display: flex;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
  align-items: flex-start;

  :not(:last-child) {
    margin-bottom: 12px;
  }
  :last-child {
    margin-bottom: 25px;
  }

  ${Card}:hover & {
    color: #fff;
  }
`;

export const CardBottom = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e8e8e8;
`;

CardBottom.Span = styled.span`
  font-weight: normal;
  margin-right: 10px;
  font-family: "Montserrat", sans-serif;
  ${Card}:hover & {
    color: #fff;
  }
`;

CardBottom.Text = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #1d1b1b;
  line-height: 22px;
  font-family: "Montserrat", sans-serif;
  ${Card}:hover & {
    color: #fff;
  }
`;

CardBottom.Icon = styled(arrowRight)`
  width: 34px;
  height: 14px;
  margin-left: auto;
`;
