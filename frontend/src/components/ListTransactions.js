import React, { useState } from 'react';
import axios from 'axios';

function ListTransactions() {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleListTransactions = async () => {
    try {
      const res = await axios.get(`/api/accounts/${accountNumber}/transactions`);
      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching transactions", error);
    }
  };

  return (
    <div>
      <h2>List Transactions</h2>
      <input 
        type="text" 
        value={accountNumber} 
        onChange={(e) => setAccountNumber(e.target.value)} 
        placeholder="Account Number" 
      />
      <button onClick={handleListTransactions}>List Transactions</button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transactionId}>
            {transaction.type}: ${transaction.amount} on {new Date(transaction.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTransactions;
