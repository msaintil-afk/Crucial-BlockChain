import { useEffect, useState } from "react";
import logo from '../../assets/images/metamask.gif';
import './Dapp.css';

 
export const App: React.FC = () => {
 const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
 const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
 
 useEffect(() => {
   if((window as any).ethereum){
     //check if Metamask wallet is installed
     setIsMetamaskInstalled(true);
   }
 },[]);
 
 //Does the User have an Ethereum wallet/account?
 async function connectMetamaskWallet(): Promise<void> {
   //to get around type checking
   (window as any).ethereum
     .request({
         method: "eth_requestAccounts",
     })
     .then((accounts : string[]) => {
       setEthereumAccount(accounts[0]);
     })
     .catch((error: any) => {
         alert(`Something went wrong: ${error}`);
     });
 }
 
 if (ethereumAccount === null) {
   return (
     <div className="App App-header">
       {
         isMetamaskInstalled ? (
           <div>
             <img src={logo} className="App-logo" alt="logo" />
             <button className="Button" onClick={connectMetamaskWallet}>Connect Your Metamask Wallet</button>
           </div>
         ) : (
           <p>Install Your Metamask wallet</p>
         )
       }
 
     </div>
   );
 }
 
 
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         ETH wallet connected as: {ethereumAccount}
       </p>
     </header>
   </div>
 );
}
 
export default App;
