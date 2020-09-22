import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./login/Login";
import Payment from "./component/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./ContextAPI/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQeGiEHJgXjelQBu60RL44B3pVNOsRokLSgahxXTAdxeI3UlRXjPazYnerAsDpIBk2f0EXAXgHuMkMVFPXodjnf00i06STmtR"
);

function App() {
  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
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
