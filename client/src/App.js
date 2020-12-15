import React, {useEffect} from 'react'
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Payment from './components/payment/Payment';
import Login from "./components/login/Login"
import Orders from "./components/orders-page/Orders"
import "./App.css";
import { Route, Switch, Redirect} from 'react-router-dom';
import "react-router-dom";
import { auth } from './firebase/firebase';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Footer from "./components/footer/Footer"
import {useStateValue} from "./contextAPI/StateProvider"

const promise=loadStripe('pk_test_51Hd2wwD99Zg7DoCBCb1teG49Zx498uKexo7gQYEeyCu74jC5zILyS9i36ciltfcaUVMSzAVgQ8rj3bFb1wFgasrW00uILahd67')

function App() {
  const [{user}, dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
       
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])

  return (
    <div className="app">
      <Switch>
      <Route path="/orders">
          <Header />
          <Orders/> 
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout/> 
          <Footer /> 
        </Route>
        <Route path="/login">
          <Login/>  
        </Route>
        <Route path="/payment">
          {!user&&<Redirect to="/"/>}
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home /> 
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;