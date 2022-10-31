import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Error from "./Error";
import ProductSeek from "./ProductSeek";
import { useState } from "react";
import FormContact from "./FormContact";
import Profile from "./Profile";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{}, dispatch] = useStateValue();

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
  
  const [darkMode, setDarkMode] = useState (false);

  return (
    <Router>
      <div className="app" style={darkMode ? {backgroundColor:"#222222", color: "#ffffff"} : {backgroundColor: "#ffffff", color: "#000000"}}>
      <button className="darkBtn" onClick={() => {setDarkMode(!darkMode)}}>
            {darkMode ? "Light" : "Dark"}
          </button>
        <Switch>
          <Route path="/profile">
            <Header/>
            <Profile/>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
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
            <Route path="/" exact>
            <Header />
            <Home />
            <FormContact/>
          </Route>
          <Route path="/product/:id">
            <Prods/>
          </Route>
          <Route path="*">
            <Header/>
            <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export function Prods() {
  let { id } = useParams();
  const [darkMode, setDarkMode] = useState (false);
  return (
    <div>
      <Header/>
      <ProductSeek id={id}/>
    </div>
  );
}

export default App;
