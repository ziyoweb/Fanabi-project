import React from "react";
import { Card, Line } from "./style";
import { Link } from "react-router-dom";

const OurWorkCart = (props) => {
  return (
    <Link to={`/наши-работы/${props.value.id}`}>
      <Card>
        <Card.Img src={props.value.img} alt="" />
        <Card.Main>
          <Card.Title>{props.value.title}</Card.Title>
          <Line />
          <Card.Text>{props.value.text}</Card.Text>
        </Card.Main>
      </Card>
    </Link>
  );
};

export default OurWorkCart;
