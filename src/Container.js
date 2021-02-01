import React, {useEffect, useState} from 'react';
import AllWallet from './AllWallet';
import NewWallet from './NewWallet';
import ChechBalance from './CheckBalance';
import AddFunds from './AddFunds';
import SpendFund from './SpendFund';
import AllTransaction from './AllTransaction';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';

function Container() {
  const [allwallet , setAllWallet] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/allwallet').then(resp => resp.json())
        .then(data =>{
            setAllWallet(data);
        })
    });
  return (
    <div className = "container">
      <div className = "row bg-info text-white justify-content-center">
        <h4>Personal Wallet UI</h4>
      </div>
      <div className = "row">
        <div className = "col col-sm-2 bg-info">
             <div className = "row">
                 <NavLink activeClassName = "active" className = "text-white p-2 link" exact to = "/allwallet">All Wallets</NavLink>
             </div>
             <div className = "row">
                 <NavLink className = "text-white p-2 link" exact to = "/newwallet">New Wallet</NavLink>
             </div>
             <div className = "row">
                 <NavLink className = "text-white p-2 link" exact to = "/checkbalance">Check Balance</NavLink>
             </div>
             <div className = "row">
                 <NavLink className = "text-white p-2 link" exact to = "/addfunds">Add Funds</NavLink>
             </div>
             <div className = "row">
                 <NavLink className = "text-white p-2 link" exact to = "/spendfund">Spend Funds</NavLink>
             </div>
             <div className = "row">
                 <NavLink className = "text-white p-2 link" exact to = "/alltransaction">All Transactions</NavLink>
             </div>
        </div>
      <div className = "col col-sm-10 justify-content-center DivContainer" style = {{maxHeight:300 + 'px', overflow: 'scroll'}}>
          <Switch>
              <Route exact path = "/allwallet"><AllWallet allwallet = {allwallet}/></Route>
              <Route exact path = "/newwallet"><NewWallet/></Route>
              <Route exact path = "/checkbalance"><ChechBalance allwallet = {allwallet}/></Route>
              <Route exact path = "/addfunds"><AddFunds allwallet = {allwallet}/></Route>
              <Route exact path = "/spendfund"><SpendFund allwallet = {allwallet}/></Route>
              <Route exact path = "/alltransaction"><AllTransaction/></Route>
          </Switch>
      </div>
      </div>
    </div>
  );
}

export default Container;
