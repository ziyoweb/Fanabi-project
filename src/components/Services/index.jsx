import React from "react";
import { ServicesData } from "../../mock";
import { OurWorksHeader } from "../OurWorks/style";
import ServicesItem from "./ServicesItem";
import { ServicesSection } from "./style";

const Services = () => {
  return (
    <ServicesSection>
      <div className="container">
        <OurWorksHeader>
          <OurWorksHeader.Title>Услуги и цены</OurWorksHeader.Title>
        </OurWorksHeader>
        <ServicesSection.Body>
          {ServicesData.map((value) => (
            <ServicesItem value={value} />
          ))}
        </ServicesSection.Body>
      </div>
    </ServicesSection>
  );
};

export default Services;
