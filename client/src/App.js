// React component imports
import React, {useEffect, lazy, Suspense} from 'react';


import "./App.css";
// react router imports
import { Route, Switch, Redirect} from 'react-router-dom';
import "react-router-dom";
// firebase import
import { auth } from './firebase/firebase';
// stripe integration imports
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
// context api import
import {useStateValue} from "./contextAPI/StateProvider";

const Header = lazy(()=>import('./components/header/Header'))
const Home = lazy(()=>import('./components/home/Home'))
const Footer = lazy(()=>import('./components/footer/Footer'))
const Checkout = lazy(()=>import('./components/checkout/Checkout'))
const Payment = lazy(()=>import('./components/payment/Payment'))
const Login = lazy(()=>import('./components/login/Login'))
const Orders = lazy(()=>import('./components/orders-page/Orders'))

const promise=loadStripe('pk_test_51Hd2wwD99Zg7DoCBCb1teG49Zx498uKexo7gQYEeyCu74jC5zILyS9i36ciltfcaUVMSzAVgQ8rj3bFb1wFgasrW00uILahd67')

function App() {
  const [{user}, dispatch]=useStateValue();

  // on component load check changes in authuser and then set user
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
        <Suspense fallback={<div>....Loading</div>}> 
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
      </Suspense>
    </div>
  );
}

export default App;