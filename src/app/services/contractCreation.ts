import { Web3 } from "web3";
import { ABI } from "@/abi/abi";
import {BYTECODE} from "@/abi/bytecode"
console.log("DEPLOYYY")
export async function deploy(name:string,surname:string, ownerMail:string, phoneNumber:number, projectName:string, requestedDonation:number): Promise<void> {
  const web3: Web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545")
  );
  const myContract: any = new web3.eth.Contract(ABI);
  myContract.handleRevert = true;

  const providersAccounts: string[] = await web3.eth.getAccounts();
  const defaultAccount: string = providersAccounts[0];
  console.log("deployer account:", defaultAccount);

  const contractDeployer: any = myContract.deploy({
    data: "0x" + BYTECODE,
    arguments: [name, surname, ownerMail, phoneNumber, projectName, requestedDonation],
  });

  const gas: number = await contractDeployer.estimateGas({
    from: defaultAccount,
  });
  console.log("estimated gas:", gas);

  try {
    const tx: any = await contractDeployer.send({
      from: defaultAccount,
      gas,
      gasPrice: 10000000000,
    });
    console.log("Contract deployed at address: " + tx.options.address);
    return tx.options.address;
  } catch (error) {
    console.error(error);
  }
}



