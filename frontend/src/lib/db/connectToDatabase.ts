import { Db, MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  console.log("client", cachedClient, cachedDb, process.env.MONGO_URI);

  if ((cachedClient && cachedDb) || !process.env.MONGO_URI) {
    // Если клиент и база данных уже закешированы, возвращаем их
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Иначе создаем новое соединение
    const client = await MongoClient.connect(process.env.MONGO_URI);

    const db = client.db("mydb");

    // Сохраняем клиент и базу данных в кеш
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.log("error", error);

    return { client: cachedClient, db: cachedDb };
  }
}
