import React from "react";
import { Web3, Contract } from "web3";
import { useState } from "react";
import {ABI} from "@/abi/abi";



export async function getBalance(contractAddress: string) {
  //state to store and show the connected account

  const web3: Web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545")
  );
  const myContract: any = new web3.eth.Contract(ABI,contractAddress);
  const providersAccounts: string[] = await web3.eth.getAccounts();
  const defaultAccount: string = providersAccounts[0];
  console.log("deployer account:", defaultAccount);
  
  const totalBalance:string = await myContract.methods.totalDonation().call();
  console.log("BALANCE",totalBalance)
  return totalBalance;
  
}
