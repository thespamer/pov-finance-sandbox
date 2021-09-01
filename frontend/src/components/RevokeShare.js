import React, { useState } from 'react';
import axios from 'axios';

function RevokeShare() {
  const [accountNumber, setAccountNumber] = useState('');
  const [institutionId, setInstitutionId] = useState('');
  const [response, setResponse] = useState(null);

  const handleRevoke = async () => {
    try {
      const res = await axios.delete(`/api/accounts/${accountNumber}/revoke-share`, {
        data: { institutionId },
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error revoking share", error);
    }
  };

  return (
    <div>
      <h2>Revoke Share Information</h2>
      <input 
        type="text" 
        value={accountNumber} 
        onChange={(e) => setAccountNumber(e.target.value)} 
        placeholder="Account Number" 
      />
      <input 
        type="text" 
        value={institutionId} 
        onChange={(e) => setInstitutionId(e.target.value)} 
        placeholder="Institution ID" 
      />
      <button onClick={handleRevoke}>Revoke Share</button>
      {response && <p>{response.message}</p>}
    </div>
  );
}

export default RevokeShare;
