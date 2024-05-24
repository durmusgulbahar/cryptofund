import React from "react";
import { Web3, Contract } from "web3";
import { useState } from 'react';
type Props = {};
const web3 = new Web3("https://polygon-amoy.g.alchemy.com/v2/-YAR9TKtzb22gZleu1609f2Bwh7GEZpu");

export default function Fund() {
    //state to store and show the connected account
    const [connectedAccount, setConnectedAccount] = useState('null');
      
    async function connectMetamask() {
      //check metamask is installed
    if ((window as any).ethereum) {
        // instantiate Web3 with the injected provider
        const web3 = new Web3((window as any).ethereum);

        //request user to connect accounts (Metamask will prompt)
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

        //get the connected accounts
        const accounts = await web3.eth.getAccounts();

        //show the first connected account in the react page
        setConnectedAccount(accounts[0]);
    } else {
        alert('Please download metamask');
    }
}
  
    return (
      <>
        {/* Button to trigger Metamask connection */}
        <button onClick={() => connectMetamask()}>Connect to Metamask</button>
  
        {/* Display the connected account */}
        <h2>{connectedAccount}</h2>
      </>
    );
  }