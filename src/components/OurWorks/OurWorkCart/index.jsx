import React from "react";
import { Card, Line } from "./style";

const OurWorkCart = ({ value }) => {
  return (
    <Card>
      <Card.Img src={value.img} alt="" />
      <Card.Main>
        <Card.Title>{value.title}</Card.Title>
        <Line />
        <Card.Text>{value.text}</Card.Text>
      </Card.Main>
    </Card>
  );
};

export default OurWorkCart;
