import { MongoClient, type Db } from "mongodb";

export const MONGODB_URI =
  process.env["MONGODB_URI"] ||
  "mongodb+srv://rajkushwahawork_db_user:z4G8WxmkO9zUIyiC@darksparkapi.o8nivgf.mongodb.net/meta?retryWrites=true&w=majority";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getMongoDb(): Promise<Db> {
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  try {
    cachedClient = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 6000,
      connectTimeoutMS: 6000,
    });
    await cachedClient.connect();
    cachedDb = cachedClient.db("meta");
    return cachedDb;
  } catch (err) {
    cachedClient = null;
    cachedDb = null;
    throw err;
  }
}
