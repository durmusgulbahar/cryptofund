import { NextResponse } from "next/server";
import mongoDbClient from "../../../../mongo.config";
import { deploy } from "@/app/services/contractCreation";

export async function POST(req: Request) {
  const resp = await req.json();
  console.log(resp);
  console.log(typeof resp.name)
  console.log(typeof resp.surname)
  console.log(typeof resp.email)
  console.log(typeof parseInt(resp.phone))
  console.log(typeof resp.projectName)
  console.log(typeof parseInt(resp.requestedDonation))
  const contractAddress = await deploy(resp.name, resp.surname, resp.email, parseInt(resp.phone), resp.projectName, parseInt(resp.requestedDonation));
  console.log(contractAddress)
  resp["contractAddress"] = contractAddress;
  try {
    await mongoDbClient.connect();
    const db = mongoDbClient.db("cryptofund");
    const collection = db.collection("projects");

    console.log(await resp)
    await collection.insertOne(resp);

    return NextResponse.json({ message: "Inserted to DB", data: resp });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "error", data: error });
  }

}