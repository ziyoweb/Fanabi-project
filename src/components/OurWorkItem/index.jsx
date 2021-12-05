import React from "react";
import { OurWorksHeader } from "../OurWorks/style";
import { ItemRight } from "../CarouselBlock/style";
import { OurWorkItemWrap, OurWorksItemImg } from "./style";
import { CarouselData } from "../../mock";
import Capital from "../../assets/images/capital-img.png";
import OrderMedia from "../OrderMedia";

const OurWorkItem = () => {
  return (
    <OurWorkItemWrap>
      <div className="container">
        <OurWorksHeader>
          <OurWorksHeader.Title>RPI CAPITAL</OurWorksHeader.Title>
        </OurWorksHeader>
        <OurWorksItemImg>
          <OurWorksItemImg.Img src={Capital} />
        </OurWorksItemImg>
        <OurWorkItemWrap.Body>
          <OurWorkItemWrap.BodyTitle>О проекте:</OurWorkItemWrap.BodyTitle>
          <OurWorkItemWrap.BodyText>
            Компания «Rpi capital» управляет инвестициями, вкладывая их в
            собственные проекты. Создает системы корпоративного управления и
            контроля над бизнесом
          </OurWorkItemWrap.BodyText>
          <OurWorkItemWrap.BodyTitle>Задача:</OurWorkItemWrap.BodyTitle>
          <OurWorkItemWrap.BodyText>
            Разработать яркий и заметный логотип для финансовой компании «Rpi
            capital»
          </OurWorkItemWrap.BodyText>

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
        </OurWorkItemWrap.Body>
        <OrderMedia />
      </div>
    </OurWorkItemWrap>
  );
};

export default OurWorkItem;
