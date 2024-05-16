import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

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
  return (
    <div className=" flex max-h-screen flex-col items-center gap-10 p-24 border border-solid border-black px-5 justify-center">
      <div className=" flex max-h-screen flex-row items-center gap-20 p-24 border border-solid border-black px-5 justify-center">
        <div className="border border-solid border-black px-5"></div>
        <div className="border border-solid border-black px-5">
          <h1 className="font-bold text-center ">{data.data.projectName}</h1>
          <p>{data.data.id}</p>
          <p>{data.data.requestFund}</p>
          <p>{data.data.totalFund}</p>
          <p>{data.data.status}</p>
          <div>
          <Input type="text" placeholder="enter"/>
          <Button>Fund</Button>
          </div>
        </div>
      </div>
      <div className="border border-solid border-black px-5">
        <h1 className="font-bold text-center ">Project Description</h1>
        <p>{data.data.description}</p>
      </div>
    </div>
  );
}
