import React, { useState } from 'react';
import axios from 'axios';

function Deposit() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [response, setResponse] = useState(null);

  const handleDeposit = async () => {
    try {
      const res = await axios.post(`/api/accounts/${accountNumber}/deposit`, null, {
        params: { amount },
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error making deposit", error);
    }
  };

  return (
    <div>
      <h2>Deposit to Account</h2>
      <input 
        type="text" 
        value={accountNumber} 
        onChange={(e) => setAccountNumber(e.target.value)} 
        placeholder="Account Number" 
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
      />
      <button onClick={handleDeposit}>Deposit</button>
      {response && <p>New Balance: ${response.balance}</p>}
    </div>
  );
}

export default Deposit;
