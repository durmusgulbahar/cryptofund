"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import whites from "C:UsersdurmusDesktopcrowdfund_projectpublichq720.jpg";
import { DataTable } from "@/app/transactions/data-table";
import Web3 from "web3"; // Import Web3 library
import { columns } from "@/app/transactions/columns";
import Fund from "@/app/services/fund";
import { getBalance } from "@/app/services/getContractBalance";
import { set } from "zod";
const ganacheUrl = "http://127.0.0.1:7545";
const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
const web3 = new Web3(httpProvider);
type Props = {
  params: {};
  searchParams: { id: string };
};

const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "donations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProjectAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x8AA2e2fc239dfc625BdA95012CeA01BdfF503C66";

async function getProject(id: string) {
  const data = await fetch(`http://localhost:3000/api/getProject?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  return data.json();
}

export default function page(props: Props) {
  const [data, setData] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState("null");
  const [donation, setDonation] = useState("0");
  const [contractAddress, setContractAddress] = useState("0");
  async function connectMetamask() {
    //check metamask is installed
    if ((window as any).ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3((window as any).ethereum);

      //request user to connect accounts (Metamask will prompt)
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
    } else {
      alert("Please download metamask");
    }
  }

  

  async function handleFund() {
    await connectMetamask();
    try {
      await Fund(data.data.contractAddress, 0.001);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProject(props.searchParams.id);
        console.log("USE EFFECT", data);
        console.log(
          "********************************",
          data.data.contractAddress
        );
        setData(data);
        const d = await getBalance(data.data.contractAddress);
        console.log("*************DONATION************", d);
        setDonation(d)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.searchParams.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-10 p-24 justify-center">
      <div className="flex max-h-screen flex-row items-center gap-20 p-10 border border-solid border-black px-5 justify-center">
        <div className="flex flex-col items-start w-2/4">
          <h1 className="font-bold text-center">{data.data.projectName}</h1>
          <p>{data.data.description}</p>
        </div>
        <div className="flex flex-col gap-5 border border-solid border-black p-10 w-2/4">
          <p>Project ID: {data.data._id}</p>
          <p>Requested Fund: {data.data.requestedDonation}$</p>
          <p>Total Fund: {parseInt(donation) * 3700 / 1000000000000000000} $</p>
          <p className="text-sm">
            Contract Address: {data.data.contractAddress}
          </p>
          <div className="p-3 flex flex-col gap-2">
            <p>DONATE</p>
            <Input type="text" placeholder="Enter amount $" />
            <Button onClick={() => handleFund()}>Donate</Button>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data.data.transactions} />
      </div> */}
    </div>
  );
}
