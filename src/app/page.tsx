import { Payment, columns } from "./projects/columns";
import { DataTable } from "./projects/data-table";

async function getData(): Promise<Payment[]> {
  const data = await fetch("http://localhost:3000/api/getAllProjects", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const dataList = await data.json();
  const list = dataList.data;
  return list;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24 ">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-6xl font-bold text-center ">
          Welcome to CryptoFund
        </h1>
        <p className="text-center text-xl">The best way to get funding</p>
      </div>
      <div className="border border-solid border-black px-5">
        Explore the projects
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
