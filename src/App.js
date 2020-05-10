import React from "react";
import AppContainer from "./elements/AppContainer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />} />
          <Route path="/contacts" component={Contacts} />} />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
