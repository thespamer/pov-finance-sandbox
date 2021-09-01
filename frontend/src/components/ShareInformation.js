import React, { useState } from 'react';
import axios from 'axios';

function ShareInformation() {
  const [accountNumber, setAccountNumber] = useState('');
  const [institutionId, setInstitutionId] = useState('');
  const [permissions, setPermissions] = useState('');
  const [response, setResponse] = useState(null);

  const handleShare = async () => {
    try {
      const res = await axios.post(`/api/accounts/${accountNumber}/share`, {
        institutionId,
        permissions: permissions.split(','),
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error sharing information", error);
    }
  };

  return (
    <div>
      <h2>Share Information</h2>
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
      <input 
        type="text" 
        value={permissions} 
        onChange={(e) => setPermissions(e.target.value)} 
        placeholder="Permissions (comma-separated)" 
      />
      <button onClick={handleShare}>Share Information</button>
      {response && <p>{response.message}</p>}
    </div>
  );
}

export default ShareInformation;
