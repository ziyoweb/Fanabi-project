import React from "react";
import Cards from "../components/Cards";
import CarouselBlock from "../components/CarouselBlock";
import Header from "../components/Header";
import OrderMedia from "../components/OrderMedia";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <CarouselBlock />
      <OrderMedia />
      <Cards />
      <OrderMedia />
      <Contact title="Наши контакты" />
    </>
  );
};

export default Home;
