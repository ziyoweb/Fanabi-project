import React from "react";
import OurWorkCart from "./OurWorkCart";
import { OurWorksData } from "../../mock";
import { OurWorksHeader, OurWorksBody } from "./style";

const OurWorks = () => {
  const Links = [
    "# Видеоролики",
    "# Разработка PR-стратегии",
    "# Графический дизайн",
    "# Онлайн сервисы",
  ];
  return (
    <div className="container">
      {/* <OurWorksHeader>
        <OurWorksHeader.Title>Наши работы</OurWorksHeader.Title>
        <OurWorksHeader.Links>
          <OurWorksHeader.LinksUl>
            {Links.map((value) => {
              return (
                <OurWorksHeader.LinksLi key={value}>
                  <OurWorksHeader.LinksA href="#">
                    {value}
                  </OurWorksHeader.LinksA>
                </OurWorksHeader.LinksLi>
              );
            })}
          </OurWorksHeader.LinksUl>
        </OurWorksHeader.Links>
      </OurWorksHeader> */}
      <OurWorksBody>
        {OurWorksData.map((value) => (
          <OurWorkCart value={value} />
        ))}
      </OurWorksBody>
    </div>
  );
};

export default OurWorks;
