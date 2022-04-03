import { useState } from 'react';
import './App.css';
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

export const App = () => {
  const [currentChainId, setCurrentChainId] = useState(provider.selectedAddress ? provider.selectedAddress : null)
  console.log(currentChainId);

  if (provider) {
    console.log("Provider:", provider);
    console.log("Is Connected:", provider.isConnected());
    console.log("Is Connected:", provider.isConnected());
  } else {
    console.log('Please install MetaMask!');
  }

  const connectWallet = () => {
    provider
      .request({ method: "eth_requestAccounts" })
      .then(result => {
        console.log("Connect Result:", result)
        console.log("Is Connected:", provider.isConnected());
        setCurrentChainId(result)
      })
      .catch(error => {
        console.log("Connect Error:", error)
      })
  }

  const getAccounts = () => {
    provider
      .request({ method: "eth_accounts" })
      .then(result => {
        console.log("Accounts Result:", result)
        setCurrentChainId(result[0])
      })
      .catch(error => {
        console.log("Accounts Error:", error)
      })
  }

  const disconnect = () => {
    provider.on('disconnect', (data) => console.log("DISCONNECT", data));
    console.log(provider);
  }

  const permissions = () => {
    provider
      // .request({ method: "wallet_getPermissions" })
      .request({ method: "eth_getEncryptionPublicKey" })
      .then(data => console.log(data))
  }

  provider.on('accountsChanged', (data) => console.log(data));

  return (
    <div className="App">
        <button onClick={connectWallet}>Connect</button>
        <button onClick={permissions}>Accounts</button>
        <button onClick={disconnect} disabled={!currentChainId}>Disconnect</button>
    </div>
  );
}
