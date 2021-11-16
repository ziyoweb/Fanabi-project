import React from "react";
import { MapWrap } from "./style";

const ContactMap = () => {
  return (
    <MapWrap>
      <MapWrap.Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.4783636986112!2d69.2845099574851!3d41.340710940514676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCY0L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40Lk!5e0!3m2!1sru!2s!4v1636441873504!5m2!1sru!2s"
        allowfullscreen
        loading="lazy"
      />
    </MapWrap>
  );
};

export default ContactMap;
