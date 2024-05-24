import { NextResponse } from "next/server";
import mongoDbClient from "../../../../mongo.config";
import { Web3 } from "web3";
const web3 = new Web3("https://eth.public-rpc.com");

export async function GET(req: Request) {
  try {
    const resp = await web3.eth.getBlockNumber();

    return NextResponse.json({
      message: "Get blocknumber from web3",
      data: resp.toString(),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error", data: error });
  }
}

function handle() {}
