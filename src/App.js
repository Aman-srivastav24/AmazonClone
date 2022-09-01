import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment'
import { useStateValue } from './StateProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
   auth.onAuthStateChanged(authUser =>{
    console.log('The user is  >>> ',authUser);
    if(authUser){
      //the just logged in or was logged in
      dispatch({
        type:'SET_USER',
        user: authUser
      })
    }
    else{
      //user is logged out
      dispatch({
        type:'SET_USER',
        user: null
      })
    }
   })
  },[])
  return (
    //BEM
    <Router>
    <div className="App">
      <Header/>
      
        <Routes >
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/checkout" element={<Checkout/>}/>
       <Route exact path="/payment" element={<Payment/>}/>
       <Route exact path="/" element={<Home/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
