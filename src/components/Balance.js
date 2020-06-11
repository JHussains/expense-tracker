import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
      <>
      
    <center>
    <fieldset>
    <legend>
    <h2><font color="#26A80C">Your Balance</font></h2></legend>
    <h1>${total}</h1>
    </fieldset>
    </center>

      </>
    )
  
  }
