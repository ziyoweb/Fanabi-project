import React from "react";
import OurWorkCart from "./OurWorkCart";
import { OurWorksData } from "../../mock";
import { OurWorksHeader, OurWorksBody } from "./style";

const OurWorks = () => {
  return (
    <div className="container">
      <OurWorksHeader>
        <OurWorksHeader.Title>Наши работы</OurWorksHeader.Title>
      </OurWorksHeader>
      <OurWorksBody>
        {OurWorksData.map((value) => (
          <OurWorkCart key={value.id} value={value} />
        ))}
      </OurWorksBody>
    </div>
  );
};

export default OurWorks;
