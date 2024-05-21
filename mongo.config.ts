import { MongoClient, ServerApiVersion } from "mongodb";
const url = process.env.MONGO_URI;

const mongoDbClient = new MongoClient(url!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

export default mongoDbClient;