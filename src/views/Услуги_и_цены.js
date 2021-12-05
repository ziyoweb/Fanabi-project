import React from "react";
import Description from "../components/Description";
import GreySection from "../components/GraySection";
import Services from "../components/Services";
import OrderMedia from "../components/OrderMedia";
import { ServicesItemData1 } from "../mock";
import { ServicesItemData2 } from "../mock";

const Услуги_и_цены = () => {
  return (
    <>
      <Services />
      <GreySection data={ServicesItemData1} />
      <GreySection white data={ServicesItemData2} />
      <Description />
      <OrderMedia />
    </>
  );
};

export default Услуги_и_цены;
