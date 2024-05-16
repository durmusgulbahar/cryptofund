import { NextResponse } from "next/server";

export function GET(req:Request){
    return NextResponse.json({
        data: [
            {
                id: "00000022112",
                projectName:"FundingForWhitetakersFamily",
                requestFund: 100,
                totalFund: 50,
                status: "pending",
              },
              {
                  id: "d9920a21x",
                  projectName:"IamNiggerBuyMePC",
                  requestFund: 100,
                  totalFund: 50,
                  status: "pending",
                 
                },
                {
                  id: "xx23311a",
                  projectName:"Prostitutes Funding Project",
                  requestFund: 100,
                  totalFund: 50,
                  status: "pending",
                 
                },
                {
                  id: "fff2441a",
                  projectName:"MyDadDiedIfYouWontHelpMeIWillBeDrugDealer",
                  requestFund: 100,
                  totalFund: 50,
                  status: "pending",
                },
        ]
    })
}