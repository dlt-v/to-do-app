import React from "react";
import Home from "./pages/Home";
import Finished from "./pages/Finished";
import Error from "./pages/Error";
import AddTask from "./pages/AddTask";

import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/finished" render={() => <Finished />} />
        <Route exact path="/add_task" render={() => <AddTask />} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default App;
