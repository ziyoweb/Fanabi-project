import React from "react";
import { OrderMediaTitle } from "./style";

const OrderMedia = () => {
  return (
    <div className="container">
      <OrderMediaTitle href="#">
        Заказать медиапродукт <OrderMediaTitle.Icon />
      </OrderMediaTitle>
    </div>
  );
};

export default OrderMedia;
