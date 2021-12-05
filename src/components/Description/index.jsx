import React from "react";
import { DescriptionData } from "../../mock";
import { DescriptionWrap, DescriptionBody, DescriptionItem } from "./style";

const Description = () => {
  return (
    <DescriptionWrap>
      <div className="container">
        <DescriptionBody>
          {DescriptionData.map((value) => {
            return (
              <DescriptionItem key={value.id}>
                <DescriptionItem.Title>{value.title}</DescriptionItem.Title>
                <DescriptionItem.Text>{value.text}</DescriptionItem.Text>
              </DescriptionItem>
            );
          })}
        </DescriptionBody>
      </div>
    </DescriptionWrap>
  );
};

export default Description;
