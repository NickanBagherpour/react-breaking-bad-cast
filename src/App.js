import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";

const App = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/profile/:id' exact component={Profile} />
    </Switch>
  </BrowserRouter>
  );
};

export default App;
