import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import whites from "C:UsersdurmusDesktopcrowdfund_projectpublichq720.jpg";
import { DataTable } from "@/app/transactions/data-table";

import {columns} from "@/app/transactions/columns";
type Props = {
  params: {
    id: string;
  };
};

async function getProject(id: string) {
  const data = await fetch("http://localhost:3000/api/getProject", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  return data.json();
}
{
  /* <p>{data.data.id}</p>
      <p>{data.data.projectName}</p>
      <p>{data.data.requestFund}</p>
      <p>{data.data.totalFund}</p>
      <p>{data.data.status}</p> */
}
export default async function page({ params }: Props) {
  const data = await getProject(params.id);
  console.log(data);
  console.log
  return (
    <div className=" flex  flex-col items-center gap-10 p-24 border border-solid border-black px-5 justify-center">
      <div className=" flex max-h-screen flex-row items-center gap-20 p-10 border border-solid border-black px-5 justify-center">
        <div className="">
          <img
            src={"https://i.ytimg.com/vi/nkGiFpJC9LM/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDpbwY0pSeikVmlkOwESz3SjdAIXw"}
            width={500}
            height={500}
            alt="Picture of the project"
          />
        </div>
        <div className="flex flex-col gap-5  border border-solid border-black p-10">
          <h1 className="font-bold text-center ">{data.data.projectName}</h1>
          <p>Project ID: {data.data.id}</p>
          <p>Requested Fund: {data.data.requestFund}$</p>
          <p>Total Fund: {data.data.totalFund}$</p>
          <p>Status: {data.data.status}</p>
          <div className="p-3 flex flex-col gap-2">
            <p>DONATE</p>
            <Input type="text" placeholder="Enter amount $" />
            <Button>Donate</Button>
          </div>
        </div>
      </div>
      <div className="border border-solid border-black px-5">
        <h1 className="font-bold text-center ">Project Description</h1>
        <p>{data.data.description}</p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data.data.transactions} />
      </div>
    </div>
  );
}
