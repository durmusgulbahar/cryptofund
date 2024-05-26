import { NextResponse } from "next/server";
import mongoDbClient from "../../../../mongo.config";
import { ObjectId } from "mongodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") as string;
  const objectId = new ObjectId(id);
  try {
    await mongoDbClient.connect();
    const db = mongoDbClient.db("cryptofund");
    const project = await db.collection("projects").findOne({ _id: objectId });
    console.log(project)
    return NextResponse.json({ data: project });
  } catch (error) {
    return NextResponse.json({ message: "error", data: error });
  }
}
