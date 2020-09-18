import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from './component/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
          {/* Header Component */}

          {/* Home Component */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
