import React from "react";
import { Item } from "./style";

const ServicesItem = ({ value }) => {
  return (
    <Item>
      <Item.Header>
        <Item.IconWrap>
          <Item.Icon src={value.icon} />
        </Item.IconWrap>
        <Item.Num>{value.numb}</Item.Num>
      </Item.Header>

      <Item.Description>{value.description}</Item.Description>
    </Item>
  );
};

export default ServicesItem;
