import React from "react";
import Carousel from "react-elastic-carousel";
import {
  CarouselSection,
  Item,
  ItemRight,
  ItemLeft,
  CarouselHeader,
  CarouselTitle,
} from "./style";
import { CarouselData } from "../../mock";

const CarouselBlock = () => {
  return (
    <div className="container">
      <CarouselSection>
        <CarouselHeader>
          <CarouselTitle>Наши работы</CarouselTitle>
          <CarouselHeader.Btn>Смотреть все</CarouselHeader.Btn>
        </CarouselHeader>

        <Carousel itemsToShow={1} pagination={false}>
          <Item>
            <ItemLeft>
              <ItemLeft.Button># графический дизайн</ItemLeft.Button>
            </ItemLeft>
            <ItemRight>
              <ItemRight.Title>
                <ItemRight.Icon1 />
                Задача:
              </ItemRight.Title>
              <ItemRight.Text>
                разработать яркий и заметныйлоготип для финансовой компании «Rpi
                capital»
              </ItemRight.Text>

              <ItemRight.Title>
                <ItemRight.Icon2 />
                Решение:
              </ItemRight.Title>
              <ItemRight.Text>
                {CarouselData.map(({ id, text }) => {
                  return (
                    <ItemRight.Text key={id} df>
                      <ItemRight.IconWrap>
                        <ItemRight.IconCircle />
                      </ItemRight.IconWrap>
                      {text}
                    </ItemRight.Text>
                  );
                })}
              </ItemRight.Text>
            </ItemRight>
          </Item>
          <Item>
            <ItemLeft>
              <ItemLeft.Button># графический дизайн</ItemLeft.Button>
            </ItemLeft>
            <ItemRight>
              <ItemRight.Title>
                <ItemRight.Icon1 />
                Задача:
              </ItemRight.Title>
              <ItemRight.Text>
                разработать яркий и заметныйлоготип для финансовой компании «Rpi
                capital»
              </ItemRight.Text>

              <ItemRight.Title>
                <ItemRight.Icon2 />
                Решение:
              </ItemRight.Title>
              <ItemRight.Text>
                {CarouselData.map(({ id, text }) => {
                  return (
                    <ItemRight.Text key={id} df>
                      <ItemRight.IconWrap>
                        <ItemRight.IconCircle />
                      </ItemRight.IconWrap>
                      {text}
                    </ItemRight.Text>
                  );
                })}
              </ItemRight.Text>
            </ItemRight>
          </Item>
          <Item>
            <ItemLeft>
              <ItemLeft.Button># графический дизайн</ItemLeft.Button>
            </ItemLeft>
            <ItemRight>
              <ItemRight.Title>
                <ItemRight.Icon1 />
                Задача:
              </ItemRight.Title>
              <ItemRight.Text>
                разработать яркий и заметныйлоготип для финансовой компании «Rpi
                capital»
              </ItemRight.Text>

              <ItemRight.Title>
                <ItemRight.Icon2 />
                Решение:
              </ItemRight.Title>
              <ItemRight.Text>
                {CarouselData.map(({ id, text }) => {
                  return (
                    <ItemRight.Text key={id} df>
                      <ItemRight.IconWrap>
                        <ItemRight.IconCircle />
                      </ItemRight.IconWrap>
                      {text}
                    </ItemRight.Text>
                  );
                })}
              </ItemRight.Text>
            </ItemRight>
          </Item>
        </Carousel>
      </CarouselSection>
    </div>
  );
};

export default CarouselBlock;
