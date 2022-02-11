import './App.css';
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  console.log(provider);
} else {
  console.log('Please install MetaMask!');
}

export const App = () => {
  return (
    <div className="App">
    </div>
  );
}
