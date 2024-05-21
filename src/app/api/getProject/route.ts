import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    data: {
      id: "00000022112",
      projectName: "FundingForWhitetakersFamily",
      requestFund: 100,
      totalFund: 50,
      status: "pending",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, erat sit amet dapibus interdum, nisl justo aliquam quam, non volutpat orci sem vitae justo. Nam eget semper ligula. Ut vehicula magna sit amet efficitur pulvinar. Vivamus vestibulum leo a orci facilisis, nec interdum ex scelerisque. ",
      transactions: [
        {
          txId: "bhhsj102831",
          amount: 10,
          from: "0x1234567890",
          timestamp: 44829182,
        },
        {
          txId: "bhhsj102831",
          amount: 10,
          from: "0x1234567890",
          timestamp: 44829182,
        },
      ],
    },
  });
}
