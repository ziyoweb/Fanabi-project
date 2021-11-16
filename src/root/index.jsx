import React from "react";
import { Container } from "./style";
import Navbar from "../components/Navbar";
import Home from "../views/Home";
import Наши_работы from "../views/Наши_работы";
import Услуги_и_цены from "../views/Услуги_и_цены";
import О_студии from "../views/О_студии";
import Контакты from "../views/Контакты";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Root = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Navbar />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/наши-работы" component={Наши_работы} />
          <Route path="/услуги_и_цены" component={Услуги_и_цены} />
          <Route path="/о_студии" component={О_студии} />
          <Route path="/контакты" component={Контакты} />
          <Route path="*">
            <Redirect to="/error" />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Root;
