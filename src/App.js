import './assets/css/dist/tailwind.css';
import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import RegisterUser from './pages/users/RegisterUser';
import LoginUser from './pages/users/LoginUser';
import HomePage from './pages/HappyCenter/homePage';
import TestHome from './pages/HappyCenter/testHome';

function App() {
  return (
    <BrowserRouter>
      <Switch>
     
        <Route
          exact
          path={`/HomePage`}
          component={HomePage}
        />

        <Route
          exact
          path={`/TestHome`}
          component={TestHome}
        />
      
{/*  */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;