import React from "react";
import CardsItem from "./CardsItem";
import { CardsData } from "../../mock";
import { CardsSection, CardsParent } from "./style";

const Cards = () => {
  return (
    <div className="container">
      <CardsSection>
        <CardsSection.Title>Услуги и цены</CardsSection.Title>

        <CardsParent>
          {CardsData.map((value) => (
            <CardsItem value={value} />
          ))}
        </CardsParent>
      </CardsSection>
    </div>
  );
};

export default Cards;
