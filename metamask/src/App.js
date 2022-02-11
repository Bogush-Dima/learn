import { useState } from 'react';
import './App.css';
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  console.log("Provider:", provider);
  console.log("Is Connected:", provider.isConnected());
} else {
  console.log('Please install MetaMask!');
}

export const App = () => {
  const [currentChainId, setCurrentChainId] = useState(provider.isConnected() ? provider.selectedAddress : null)

  const connectWallet = () => {
    provider
      .request({ method: "eth_requestAccounts" })
      .then(result => {
        console.log("Connect Result:", result)
        setCurrentChainId(result)
      })
      .catch(error => {
        console.log("Connect Error:", error)
      })
  }

  return (
    <div className="App">
        <button onClick={connectWallet} disabled={currentChainId}>Connect</button>
    </div>
  );
}
