import { NextResponse } from "next/server";
import mongoDbClient from "../../../../mongo.config";

export async function POST(req:Request){
    const resp = await req.json();


    resp["contractAddress"] = "12345"
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