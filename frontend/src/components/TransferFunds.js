import React, { useState } from 'react';
import axios from 'axios';

function TransferFunds() {
  const [sourceAccount, setSourceAccount] = useState('');
  const [targetAccount, setTargetAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [response, setResponse] = useState(null);

  const handleTransfer = async () => {
    try {
      const res = await axios.post(`/api/accounts/${sourceAccount}/transfer`, null, {
        params: { targetAccount, amount },
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error transferring funds", error);
    }
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <input 
        type="text" 
        value={sourceAccount} 
        onChange={(e) => setSourceAccount(e.target.value)} 
        placeholder="Source Account Number" 
      />
      <input 
        type="text" 
        value={targetAccount} 
        onChange={(e) => setTargetAccount(e.target.value)} 
        placeholder="Target Account Number" 
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
      />
      <button onClick={handleTransfer}>Transfer</button>
      {response && <p>Transfer Completed: ${response.amount} from {response.sourceAccount} to {response.targetAccount}</p>}
    </div>
  );
}

export default TransferFunds;
