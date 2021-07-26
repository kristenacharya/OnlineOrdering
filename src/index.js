import './index.css';
import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import NavBar from './navbar.js';
import Home from './home.js';
import CreateAccount from './createaccount.js';
import AllData from './alldata.js';
import { UserContext } from './context.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import SpryStepKafo from './products/sprystepkafo.js';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Fiona Acharya',email:'test@test.com',phone:'123-123-1212',account:'abc101/abc101'}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/Home/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/products/SpryStepKafo" component={SpryStepKafo} />
          <Route path="/Deposit/" component={Deposit} />
          <Route path="/Withdraw/" component={Withdraw} />
          <Route path="/AllData/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
