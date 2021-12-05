import React from "react";
import { Wrapper } from "./style";
import loaderIcon from "../../assets/icons/loader.svg";

const Loader = () => {
  return (
    <Wrapper>
      <img src={loaderIcon} alt="Loading..." />
    </Wrapper>
  );
};

export default Loader;
