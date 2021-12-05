import React, { useState, useEffect } from "react";
import { Container } from "./style";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../views/Home";
import Наши_работы from "../views/Наши_работы";
import Услуги_и_цены from "../views/Услуги_и_цены";
import О_студии from "../views/О_студии";
import Контакты from "../views/Контакты";
import OurWorkItem from "../components/OurWorkItem";
import Loader from "../components/Loader";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Root = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1500);
  }, []);

  return !load ? (
    <Loader />
  ) : (
    <Container>
      <Router>
        <Switch>
          <Navbar />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/наши-работы" component={Наши_работы} />
          <Route exact path="/услуги_и_цены" component={Услуги_и_цены} />
          <Route exact path="/о_студии" component={О_студии} />
          <Route exact path="/контакты" component={Контакты} />
          <Route exact paht="/наши-работы/:id" component={OurWorkItem} />
          <Route path="*">
            <Redirect to="/error" />
          </Route>
        </Switch>
        <Switch>
          <Footer />
        </Switch>
      </Router>
    </Container>
  );
};

export default Root;
