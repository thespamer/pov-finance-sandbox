import React, { useState } from 'react';
import axios from 'axios';

function CheckBalance() {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = async () => {
    try {
      const response = await axios.get(`/api/accounts/${accountNumber}/balance`);
      setBalance(response.data);
    } catch (error) {
      console.error("Error fetching balance", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={accountNumber} 
        onChange={(e) => setAccountNumber(e.target.value)} 
        placeholder="Enter Account Number" 
      />
      <button onClick={handleCheckBalance}>Check Balance</button>
      {balance !== null && <p>Balance: ${balance}</p>}
    </div>
  );
}

export default CheckBalance;