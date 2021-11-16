import React from "react";
import { Card, CardBottom } from "./style";
import { HeaderLeftItem } from "../../Header/style";

const CardsItem = ({ value }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Description>{value.title}</Card.Description>
        {value.text.map((item, index) => (
          <Card.Text key={index}>
            <HeaderLeftItem.IconWrap>
              <HeaderLeftItem.Icon />
            </HeaderLeftItem.IconWrap>
            {item}
          </Card.Text>
        ))}
      </Card.Content>
      <CardBottom>
        <CardBottom.Span>от</CardBottom.Span>
        <CardBottom.Text>{value.money}</CardBottom.Text>
        <CardBottom.Icon />
      </CardBottom>
    </Card>
  );
};

export default CardsItem;
