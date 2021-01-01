import React, { useEffect } from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import { auth } from "./firebase";
import {useStateValue} from "./Components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js"
function App() {
  const promise=loadStripe("pk_test_51I414FJTia59pHPY8ElotJNCUNvua4oVV4TYpYdcmbaE15LIc3ySzj0iCKdfYpPWZpXWj3id5jxPpOyAogkFKGVr000W9lx5M8");
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
  //Will only run once when the app component loads..
   auth.onAuthStateChanged(authUser=>{
     console.log('THE USER IS >>> ',authUser);
     if(authUser){
       //the user just logged in/the user was logged in
       dispatch({
         type:"SET_USER",
         user:authUser
       })
     }else{
       //the user is logged out
       dispatch({
         type:"SET_USER",
         user:null
       })
     }
   })
  },[])
  return (
  <Router>
    <div className="App">
      
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Checkout">
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
      </Switch>
    </div>
  </Router>
  );
}

export default App;
