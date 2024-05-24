import { NextResponse } from "next/server";
import mongoDbClient from "../../../../mongo.config";
export async function GET(req:Request){
    try{
      await mongoDbClient.connect();
      const db = mongoDbClient.db("cryptofund");
      const projects = db.collection("projects");
      const docs = await projects.find({}).sort({ _id: -1 }).toArray();
      return NextResponse.json({
        data: docs,
      });

    }
    catch(e){
      return NextResponse.json({
        data: [],
      });
    }
}