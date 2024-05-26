import { Web3, Contract } from "web3";
import { ABI } from "@/abi/abi";
type Props = {};


export default async function Fund(contractAddress: string, amount: number) {
  //state to store and show the connected account

  const web3: Web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545")
  );
  const myContract: any = new web3.eth.Contract(ABI, contractAddress);
  const providersAccounts: string[] = await web3.eth.getAccounts();
  const defaultAccount: string = providersAccounts[0];
  console.log("deployer account:", defaultAccount);
  const message = web3.utils.utf8ToHex(`I donated to project in CrowdFunding platform.`); // sign only takes hexstrings, so turn message to hexstring
  const signedMessage = await web3.eth.sign(message, defaultAccount);
  console.log(signedMessage);

  
  const receipt: any = await myContract.methods.fund().send({
    from: defaultAccount,
    gas: 1000000,
    gasPrice: '10000000000',
    message: signedMessage,
    value: web3.utils.toWei(amount, 'ether')
  });
  console.log('Transaction Hash: ' + receipt.transactionHash);
}
