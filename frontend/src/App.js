import React, { useState } from 'react';
import './styles.css';  // Import the CSS file
import CheckBalance from './components/CheckBalance';
import Deposit from './components/Deposit';
import ListTransactions from './components/ListTransactions';
import TransferFunds from './components/TransferFunds';
import ShareInformation from './components/ShareInformation';
import RevokeShare from './components/RevokeShare';

function App() {
  const [activeComponent, setActiveComponent] = useState('CheckBalance');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'CheckBalance':
        return <CheckBalance />;
      case 'Deposit':
        return <Deposit />;
      case 'ListTransactions':
        return <ListTransactions />;
      case 'TransferFunds':
        return <TransferFunds />;
      case 'ShareInformation':
        return <ShareInformation />;
      case 'RevokeShare':
        return <RevokeShare />;
      default:
        return <CheckBalance />;
    }
  };

  return (
    <div>
      <h1>Open Finance Dashboard</h1>
      <nav>
        <button onClick={() => setActiveComponent('CheckBalance')}>Check Balance</button>
        <button onClick={() => setActiveComponent('Deposit')}>Deposit</button>
        <button onClick={() => setActiveComponent('ListTransactions')}>List Transactions</button>
        <button onClick={() => setActiveComponent('TransferFunds')}>Transfer Funds</button>
        <button onClick={() => setActiveComponent('ShareInformation')}>Share Information</button>
        <button onClick={() => setActiveComponent('RevokeShare')}>Revoke Share</button>
      </nav>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
